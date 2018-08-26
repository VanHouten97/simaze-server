require("module-alias/register");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const body_parser_1 = require("body-parser");
const routes_1 = require("@lib/routes");
const port = 3050;
class App {
    constructor() {
        this.app = express();
        this.app.use(body_parser_1.urlencoded({ extended: false }));
        this.app.use(body_parser_1.json());
        this.app.use(morgan('dev'));
        routes_1.apiRoutes(this.app);
    }
    listen(port) {
        this.app.listen(port);
        console.log(`Listening on port: ${port}`);
    }
}
let app = new App();
app.listen(port);

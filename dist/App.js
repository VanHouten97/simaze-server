require('module-alias/register');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const validator = require("@lib/validators/user.validator");
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
    }
}
new App();
validator.zipCode('35702-513', (res, err) => {
    if (err)
        console.log(err);
    if (res)
        console.log(res);
});

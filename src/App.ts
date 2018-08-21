import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import validator = require('@lib/validators/user.validator');

class App {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
    }
}

new App();

validator.admission('2018-0101', (res, err) => {
    if (err) console.log(err);
    if (res) console.log(res);
});

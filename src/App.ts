import * as express from "express";
import * as morgan from "morgan";
import { urlencoded, json } from "body-parser";
import { admission } from '@validators/user';

class App {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(urlencoded({extended: false}));
        this.app.use(json());
        this.app.use(morgan('dev'));
    }
}

new App();

admission('2018-0101', (res, err) => {
    if (err) console.log(err);
    if (res) console.log(res);
});

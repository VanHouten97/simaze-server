import  * as express from "express";
import * as morgan from "morgan";
import { urlencoded, json } from "body-parser";
import { apiRoutes } from '@lib/routes';

const port: number = 3050;

class App {
    app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(urlencoded({extended: false}));
        this.app.use(json());
        this.app.use(morgan('dev'));
        apiRoutes(this.app);
    }

    public listen(port: number): void {
        this.app.listen(port);
        console.log(`Listening on port: ${port}`);
    }
}

let app:App = new App();
app.listen(port);

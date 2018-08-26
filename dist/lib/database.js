"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = require("@lib/config");
const config_2 = require("@lib/config");
const url = `mongodb://${config_1.database.dbUser}:${config_1.database.dbPass}@${config_1.database.host}:${config_1.database.port}/${config_1.database.dbName}`;
function connect(evt) {
    mongodb_1.MongoClient.connect(url, { useNewUrlParser: true }, (err, con) => {
        if (err) {
            evt(null, null, config_2.err(0xFFFFF, err));
        }
        else {
            evt(con, con.db(config_1.database.dbName), null);
        }
    });
}
exports.connect = connect;

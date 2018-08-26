import { Error } from '@interfaces';
import { Db, MongoClient, MongoError } from 'mongodb';
import { database as dConf } from '@lib/config';
import { err as e } from '@lib/config';

const url: string = `mongodb://${dConf.dbUser}:${dConf.dbPass}@${dConf.host}:${dConf.port}/${dConf.dbName}`;

export function connect(evt: (con: MongoClient, db: Db, err: Error) => void): void {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, con): void => {
        if (err) {
            evt(null, null, e(0xFFFFF, err));
        } else {
            evt(con, con.db(dConf.dbName), null);
        }
    });
}

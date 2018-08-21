import * as validator from "validator";
import config = require('@lib/config');

const e = config.err;

let _this = {
    fullname: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 10 || tmp.length > 60) {
            cb(null, e(0x00001));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlpha(tmp, 'pt-BR')) {
            cb(null, e(0x00002));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    cpf: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim().replace('.','').replace('-', '');
        if (tmp.length !== 11) {
            cb(null, e(0x00003));
            return;
        }
        if (!validator.isNumeric(tmp, {no_symbols: true})) {
            cb(null, e(0x00004));
            return;
        }
        cb(e(0, tmp), null);
    },

    email: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 5 || tmp.length > 40) {
            cb(null, e(0x00005));
            return;
        }
        if (!validator.isEmail(tmp)) {
            cb(null, e(0x00006));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    nickname: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 5 || tmp.length > 15) {
            cb(null, e(0x00007));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlpha(tmp, 'pt-BR')) {
            cb(null, e(0x00008));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    date: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (validator.toDate(tmp) === null) {
            cb(null, e(0x00009));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    birth: (item: string, cb: (res: object, err: object) => void): void => {
        _this.date(item, (res, err) => {
            if (err) {
                cb(null, e(0x0000A));
                return;
            }
            cb(res, null);
        });
    },

    phone: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (!validator.isMobilePhone(tmp, 'pt-BR')) {
            cb(null, e(0x0000B));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    role: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 5 || tmp.length > 30) {
            cb(null, e(0x0000C));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlphaNumeric(tmp, 'pt-BR')) {
            cb(null, e(0x0000D));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    admission: (item: string, cb: (res: object, err: object) => void): void => {
        _this.date(item, (res, err) => {
            if (err) {
                cb(null, e(0x0000E));
                return;
            }
            cb(res, null);
        });
    },

    registry: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 3 || tmp.length > 12) {
            cb(null, e(0x0000F));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    gender: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim().toLowerCase();
        if (tmp !== 'm' && tmp !== 'f') {
            cb(null, e(0x00010));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    state: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length !== 2) {
            cb(null, e(0x00011));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    city: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length > 20 || tmp.length < 3) {
            cb(null, e(0x00012));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlpha(tmp, 'pt-BR')) {
            cb(null, e(0x00013));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    district: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 3 || tmp.length > 30) {
            cb(null, e(0x00014));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlpha(tmp, 'pt-BR')) {
            cb(null, e(0x00015));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    street: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length < 3 || tmp.length > 40) {
            cb(null, e(0x00016));
            return;
        }
        tmp = tmp.replace(' ', '');
        if (!validator.isAlpha(tmp, 'pt-BR')) {
            cb(null, e(0x00017));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    address: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length > 11) {
            cb(null, e(0x00018));
            return;
        }
        if (!validator.isAlphaNumeric(tmp, 'pt-BR')) {
            cb(null, e(0x00019));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },

    zipCode: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim().replace('-', '');
        if (tmp.length !== 8) {
            cb(null, e(0x0001A));
            return;
        }
        if (!validator.isNumeric(tmp, {no_symbols: true})) {
            cb(null, e(0x0001B));
            return;
        }
        cb(e(0, tmp), null);
    },

    password: (item: string, cb: (res: object, err: object) => void): void => {
        let tmp = item.trim();
        if (tmp.length > 40) {
            cb(null, e(0x0001C));
            return;
        }
        cb(e(0, item.trim().toLowerCase()), null);
    },
};

export = _this;

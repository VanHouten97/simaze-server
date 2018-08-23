import { Error } from '@interfaces';
import { err as e } from '@lib/config';
import { UCFirst } from '@tools/string';
import {
    isAlpha,
    isAlphanumeric,
    isEmail,
    isNumeric,
    isMobilePhone,
    toDate
} from "validator";

export function fullname(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 10 || tmp.length > 60) {
        cb(null, e(0x00001));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlpha(tmp, 'pt-BR')) {
        cb(null, e(0x00002));
        return;
    }

    cb(UCFirst(item.trim().toLowerCase()), null);
};

export function cpf(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim().replace('.','').replace('-', '');
    if (tmp.length !== 11) {
        cb(null, e(0x00003));
        return;
    }
    if (isNumeric(tmp)) {
        cb(null, e(0x00004));
        return;
    }
    cb(tmp, null);
};

export function email(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 40) {
        cb(null, e(0x00005));
        return;
    }
    if (isEmail(tmp)) {
        cb(null, e(0x00006));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function nickname(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 15) {
        cb(null, e(0x00007));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlpha(tmp, 'pt-BR')) {
        cb(null, e(0x00008));
        return;
    }
    cb(UCFirst(item.trim().toLowerCase()), null);
};

export function date(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (toDate(tmp) === null) {
        cb(null, e(0x00009));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function birth(item: string, cb: (res: string, err: Error) => void): void {
    date(item, (res, err) => {
        if (err) {
            cb(null, e(0x0000A));
            return;
        }
        cb(res, null);
    });
};

export function phone(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (isMobilePhone(tmp, 'any')) {
        cb(null, e(0x0000B));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function role(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 30) {
        cb(null, e(0x0000C));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlphanumeric(tmp, 'pt-BR')) {
        cb(null, e(0x0000D));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function admission(item: string, cb: (res: string, err: Error) => void): void {
    date(item, (res, err) => {
        if (err) {
            cb(null, e(0x0000E));
            return;
        }
        cb(res, null);
    });
};

export function registry(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 12) {
        cb(null, e(0x0000F));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function gender(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim().toLowerCase();
    if (tmp !== 'm' && tmp !== 'f') {
        cb(null, e(0x00010));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function state(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length !== 2) {
        cb(null, e(0x00011));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function city(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length > 20 || tmp.length < 3) {
        cb(null, e(0x00012));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlpha(tmp, 'pt-BR')) {
        cb(null, e(0x00013));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function district(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 30) {
        cb(null, e(0x00014));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlpha(tmp, 'pt-BR')) {
        cb(null, e(0x00015));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function street(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 40) {
        cb(null, e(0x00016));
        return;
    }
    tmp = tmp.replace(' ', '');
    if (isAlpha(tmp, 'pt-BR')) {
        cb(null, e(0x00017));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function address(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length > 11) {
        cb(null, e(0x00018));
        return;
    }
    if (isAlphanumeric(tmp, 'pt-BR')) {
        cb(null, e(0x00019));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

export function zipCode(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim().replace('-', '');
    if (tmp.length !== 8) {
        cb(null, e(0x0001A));
        return;
    }
    if (isNumeric(tmp)) {
        cb(null, e(0x0001B));
        return;
    }
    cb(tmp, null);
};

export function password(item: string, cb: (res: string, err: Error) => void): void {
    let tmp = item.trim();
    if (tmp.length > 40) {
        cb(null, e(0x0001C));
        return;
    }
    cb(item.trim().toLowerCase(), null);
};

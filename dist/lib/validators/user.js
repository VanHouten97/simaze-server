"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@lib/config");
const string_1 = require("@tools/string");
const validator_1 = require("validator");
function fullname(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 10 || tmp.length > 60) {
        cb(null, config_1.err(0x00001));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlpha(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x00002));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.fullname = fullname;
;
function cpf(item, cb) {
    let tmp = item.trim().replace(/(\.|-)/g, '');
    if (tmp.length !== 11) {
        cb(null, config_1.err(0x00003));
        return;
    }
    if (!validator_1.isNumeric(tmp)) {
        cb(null, config_1.err(0x00004));
        return;
    }
    cb(tmp, null);
}
exports.cpf = cpf;
;
function email(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 40) {
        cb(null, config_1.err(0x00005));
        return;
    }
    if (!validator_1.isEmail(tmp)) {
        cb(null, config_1.err(0x00006));
        return;
    }
    cb(item.trim().toLowerCase(), null);
}
exports.email = email;
;
function nickname(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 20) {
        cb(null, config_1.err(0x00007));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlpha(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x00008));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.nickname = nickname;
;
function date(item, cb) {
    let tmp = item.trim();
    if (validator_1.toDate(tmp) === null) {
        cb(null, config_1.err(0x00009));
        return;
    }
    cb(item.trim().toLowerCase(), null);
}
exports.date = date;
;
function birth(item, cb) {
    date(item, (res, err) => {
        if (err) {
            cb(null, config_1.err(0x0000A));
            return;
        }
        cb(res, null);
    });
}
exports.birth = birth;
;
function phone(item, cb) {
    let tmp = item.trim();
    if (!validator_1.isMobilePhone(tmp, 'any')) {
        cb(null, config_1.err(0x0000B));
        return;
    }
    cb(item.trim().toLowerCase(), null);
}
exports.phone = phone;
;
function role(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 5 || tmp.length > 30) {
        cb(null, config_1.err(0x0000C));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlphanumeric(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x0000D));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.role = role;
;
function admission(item, cb) {
    date(item, (res, err) => {
        if (err) {
            cb(null, config_1.err(0x0000E));
            return;
        }
        cb(res, null);
    });
}
exports.admission = admission;
;
function registry(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 12) {
        cb(null, config_1.err(0x0000F));
        return;
    }
    cb(item.trim().toLowerCase(), null);
}
exports.registry = registry;
;
function gender(item, cb) {
    let tmp = item.trim().toLowerCase();
    if (tmp !== 'm' && tmp !== 'f') {
        cb(null, config_1.err(0x00010));
        return;
    }
    cb(item.trim().toUpperCase(), null);
}
exports.gender = gender;
;
function state(item, cb) {
    let tmp = item.trim();
    if (tmp.length !== 2) {
        cb(null, config_1.err(0x00011));
        return;
    }
    cb(item.trim().toUpperCase(), null);
}
exports.state = state;
;
function city(item, cb) {
    let tmp = item.trim();
    if (tmp.length > 20 || tmp.length < 3) {
        cb(null, config_1.err(0x00012));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlpha(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x00013));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.city = city;
;
function district(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 30) {
        cb(null, config_1.err(0x00014));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlpha(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x00015));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.district = district;
;
function street(item, cb) {
    let tmp = item.trim();
    if (tmp.length < 3 || tmp.length > 40) {
        cb(null, config_1.err(0x00016));
        return;
    }
    tmp = tmp.replace(/( )/g, '');
    if (!validator_1.isAlpha(tmp, 'pt-BR')) {
        cb(null, config_1.err(0x00017));
        return;
    }
    cb(string_1.UCFirst(item.trim()), null);
}
exports.street = street;
;
function address(item, cb) {
    let tmp = item.trim();
    if (tmp.length > 11) {
        cb(null, config_1.err(0x00018));
        return;
    }
    if (!validator_1.isNumeric(tmp)) {
        cb(null, config_1.err(0x00019));
        return;
    }
    cb(parseInt(tmp), null);
}
exports.address = address;
;
function complement(item, cb) {
    let tmp = item.trim();
    if (tmp.length > 11) {
        cb(null, config_1.err(0x0001A));
        return;
    }
    if (!validator_1.isAlphanumeric(tmp)) {
        cb(null, config_1.err(0x0001B));
        return;
    }
    cb(tmp.toUpperCase(), null);
}
exports.complement = complement;
;
function zipCode(item, cb) {
    let tmp = item.trim().replace(/(-)/g, '');
    if (tmp.length !== 8) {
        cb(null, config_1.err(0x0001C));
        return;
    }
    if (!validator_1.isNumeric(tmp)) {
        cb(null, config_1.err(0x0001D));
        return;
    }
    cb(tmp, null);
}
exports.zipCode = zipCode;
;
function password(item, cb) {
    let tmp = item.trim();
    if (tmp.length > 40) {
        cb(null, config_1.err(0x0001E));
        return;
    }
    cb(item.trim().toLowerCase(), null);
}
exports.password = password;
;
function enabled(item, cb) {
    if (item.trim() === '1')
        return cb(true, null);
    return cb(false, null);
}
exports.enabled = enabled;
;

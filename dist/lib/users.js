"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@lib/config");
const validator = require("@validators/user");
const collection = "simaze_users";
class Users {
    static addUser(info, db, cb) {
        db.collection(collection).createIndex({
            cpf: 1, email: 1, registry: 1
        }, { unique: true });
        this.toUser(info, (user, err) => {
            if (err)
                return cb(null, err);
            db.collection(collection).insertOne(user).then((_resolved) => {
                cb(true, null);
            }, (rejected) => {
                cb(false, config_1.err(0xFFFFF, rejected));
            });
        });
    }
    static toUser(info, cb) {
        let o;
        let i = {};
        if (!info)
            return cb(null, config_1.err(0x0001F));
        if (!o && info.fullname)
            validator.fullname(info.fullname, (res, err) => {
                if (err)
                    return o = err, null;
                i.fullname = res;
            });
        if (!o && info.nickname)
            validator.nickname(info.nickname, (res, err) => {
                if (err)
                    return o = err, null;
                i.nickname = res;
            });
        if (!o && info.cpf)
            validator.cpf(info.cpf, (res, err) => {
                if (err)
                    return o = err, null;
                i.cpf = res;
            });
        if (!o && info.email)
            validator.email(info.email, (res, err) => {
                if (err)
                    return o = err, null;
                i.email = res;
            });
        if (!o && info.password)
            validator.password(info.password, (res, err) => {
                if (err)
                    return o = err, null;
                i.password = res;
            });
        if (!o && info.role)
            validator.role(info.role, (res, err) => {
                if (err)
                    return o = err, null;
                i.role = res;
            });
        if (!o && info.registry)
            validator.registry(info.registry, (res, err) => {
                if (err)
                    return o = err, null;
                i.registry = res;
            });
        if (!o && info.birth)
            validator.birth(info.birth, (res, err) => {
                if (err)
                    return o = err, null;
                i.birth = res;
            });
        if (!o && info.role)
            validator.role(info.role, (res, err) => {
                if (err)
                    return o = err, null;
                i.role = res;
            });
        if (!o && info.admission)
            validator.admission(info.birth, (res, err) => {
                if (err)
                    return o = err, null;
                i.admission = res;
            });
        if (!o && info.phone) {
            i.phone = {};
            if (!o && info.phone.landline)
                validator.phone(info.phone.landline, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.phone.landline = res;
                });
            if (!o && info.phone.mobile)
                validator.phone(info.phone.mobile, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.phone.mobile = res;
                });
        }
        if (!o && info.living) {
            i.living = {};
            if (!o && info.living.state)
                validator.state(info.living.state, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.state = res;
                });
            if (!o && info.living.city)
                validator.city(info.living.city, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.city = res;
                });
            if (!o && info.living.district)
                validator.district(info.living.district, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.district = res;
                });
            if (!o && info.living.street)
                validator.street(info.living.street, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.street = res;
                });
            if (!o && info.living.number)
                validator.address(info.living.number, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.number = res;
                });
            if (!o && info.living.complement)
                validator.complement(info.living.complement, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.complement = res;
                });
            if (!o && info.living.zip)
                validator.zipCode(info.living.zip, (res, err) => {
                    if (err)
                        return o = err, null;
                    i.living.zip = res;
                });
        }
        if (o)
            return cb(null, o);
        return cb(i, null);
    }
}
exports.Users = Users;

import { User, Error } from '@interfaces';
import { Db } from 'mongodb';
import { err as e } from '@lib/config';
import * as validator from '@validators/user';

const collection: string = "simaze_users";

class Users {
    static addUser(info: any, db: Db, cb: (result: boolean, err: Error) => void): void {
        db.collection(collection).createIndex({
             cpf: 1, email: 1, registry: 1
         }, { unique: true });

        this.toUser(info, (user, err): void => {
            if (err) return cb(null, err);
            db.collection(collection).insertOne(user).then((_resolved): void => {
                cb(true, null);
            }, (rejected): void => {
                cb(false, e(0xFFFFF, rejected));
            });
        });
    }

    static toUser(info: any, cb: (user: User, err: Error) => void): void {
        let o: Error;
        let i: User = {};

        if (!info) return cb(null, e(0x0001F));

        // Verificar nome completo
        if (!o && info.fullname)
            validator.fullname(info.fullname, (res, err) => {
                if (err) return o = err, null;
                i.fullname = res;
            });
        // Verificar nome de exibição
        if (!o && info.nickname)
            validator.nickname(info.nickname, (res, err) => {
                if (err) return o = err, null;
                i.nickname = res;
            });
        // Verificar cpf
        if (!o && info.cpf)
            validator.cpf(info.cpf, (res, err) => {
                if (err) return o = err, null;
                i.cpf = res;
            });
        // Verificar email
        if (!o && info.email)
            validator.email(info.email, (res, err) => {
                if (err) return o = err, null;
                i.email = res;
            });
        // Verificar senha
        if (!o && info.password)
            validator.password(info.password, (res, err) => {
                if (err) return o = err, null;
                i.password = res;
            });
        // Verificar cargo
        if (!o && info.role)
            validator.role(info.role, (res, err) => {
                if (err) return o = err, null;
                i.role = res;
            });
        // Verificar matricula
        if (!o && info.registry)
            validator.registry(info.registry, (res, err) => {
                if (err) return o = err, null;
                i.registry = res;
            });
        // Verificar nascimento
        if (!o && info.birth)
            validator.birth(info.birth, (res, err) => {
                if (err) return o = err, null;
                i.birth = res;
            });
        // Verificar cargo
        if (!o && info.role)
            validator.role(info.role, (res, err) => {
                if (err) return o = err, null;
                i.role = res;
            });
        // Verificar nascimento
        if (!o && info.admission)
            validator.admission(info.birth, (res, err) => {
                if (err) return o = err, null;
                i.admission = res;
            });

        if (!o && info.phone) {
            i.phone = {};
            // Verificar telefone fixo
            if (!o && info.phone.landline)
                validator.phone(info.phone.landline, (res, err) => {
                    if (err) return o = err, null;
                    i.phone.landline = res;
                });
            // Verificar telefone movel
            if (!o && info.phone.mobile)
                validator.phone(info.phone.mobile, (res, err): void => {
                    if (err) return o = err, null;
                    i.phone.mobile = res;
                });
        }

        if (!o && info.living) {
            i.living = {};
            // Verificar estado
            if (!o && info.living.state)
                validator.state(info.living.state, (res, err) => {
                    if (err) return o = err, null;
                    i.living.state = res;
                });
            // Verificar cidade
            if (!o && info.living.city)
                validator.city(info.living.city, (res, err) => {
                    if (err) return o = err, null;
                    i.living.city = res;
                });
            // Verificar bairro
            if (!o && info.living.district)
                validator.district(info.living.district, (res, err) => {
                    if (err) return o = err, null;
                    i.living.district = res;
                });
            // Verificar rua
            if (!o && info.living.street)
                validator.street(info.living.street, (res, err) => {
                    if (err) return o = err, null;
                    i.living.street = res;
                });
            // Verificar numero
            if (!o && info.living.number)
                validator.address(info.living.number, (res, err) => {
                    if (err) return o = err, null;
                    i.living.number = res;
                });
            // Verificar complemento
            if (!o && info.living.complement)
                validator.complement(info.living.complement, (res, err) => {
                    if (err) return o = err, null;
                    i.living.complement = res;
                });
            //Verificar CEP
            if (!o && info.living.zip)
                validator.zipCode(info.living.zip, (res, err) => {
                    if (err) return o = err, null;
                    i.living.zip = res;
                });
        }

        if (o) return cb(null, o);
        return cb(i, null);
    }
}

export { Users };

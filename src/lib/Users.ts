import { User, Error } from '@interfaces';
import * as validator from '@validators/user';

class Users {
    static addUser() {

    }

    private static validateFields(info: User): User|Error {
        let o: Error;
        let i: User = {};

        // Verificar nome completo
        if (!o && info.fullname)
            validator.fullname(info.fullname, (res, err) => {
                if (err) { o = err; return; }
                i.fullname = res;
            });
        // Verificar nome de exibição
        if (!o && info.nickname)
            validator.nickname(info.nickname, (res, err) => {
                if (err) { o = err; return; }
                i.nickname = res;
            });
        // Verificar cpf
        if (!o && info.cpf)
            validator.cpf(info.cpf, (res, err) => {
                if (err) { o = err; return; }
                i.cpf = res;
            });
        // Verificar email
        if (!o && info.email)
            validator.email(info.email, (res, err) => {
                if (err) { o = err; return; }
                i.email = res;
            });
        // Verificar senha
        if (!o && info.password)
            validator.password(info.password, (res, err) => {
                if (err) { o = err; return; }
                i.password = res;
            });
        // Verificar cargo
        if (!o && info.role)
            validator.role(info.role, (res, err) => {
                if (err) { o = err; return; }
                i.role = res;
            });
        // Verificar matricula
        if (!o && info.registry)
            validator.registry(info.registry, (res, err) => {
                if (err) { o = err; return; }
                i.registry = res;
            });
        // Verificar nascimento
        if (!o && info.birth)
            validator.birth(info.birth, (res, err) => {
                if (err) { o = err; return; }
                i.birth = res;
            });
        // Verificar nascimento
        if (!o && info.birth)
            validator.birth(info.birth, (res, err) => {
                if (err) { o = err; return; }
                i.birth = res;
            });

        if (o) return o;
        return i;
    }
}

export { Users };

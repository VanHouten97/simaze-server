import validator = require('@lib/validators/user.validator');

class Users {
    addUser() {

    }

    validateFields(info: object): object {
        let o = {};

        // Verificar nome completo
        if (!o.err && info.fullname)
            validator.fullname(info.fullname, (res, err) => {
                if (err) { o = err; return; }
                o.fullname = res.data;
            });
        // Verificar nome de exibição
        if (!o.err && info.nickname)
            validator.nickname(info.nickname, (res, err) => {
                if (err) { o = err; return; }
                o.nickname = res.data;
            });
        // Verificar cpf
        if (!o.err && info.cpf)
            validator.cpf(info.cpf, (res, err) => {
                if (err) { o = err; return; }
                o.cpf = res.data;
            });
        // Verificar email
        if (!o.err && info.cpf)
            validator.cpf(info.cpf, (res, err) => {
                if (err) { o = err; return; }
                o.cpf = res.data;
            });
        // Verificar senha
        if (!o.err && info.password)
            validator.password(info.password, (res, err) => {
                if (err) { o = err; return; }
                o.password = res.data;
            });
        // Verificar cargo
        if (!o.err && info.role)
            validator.role(info.role, (res, err) => {
                if (err) { o = err; return; }
                o.role = res.data;
            });
    }
}

export { Users };

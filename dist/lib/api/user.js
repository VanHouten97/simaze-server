"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("@lib/database");
const string_1 = require("@tools/string");
const config_1 = require("@lib/config");
const users_1 = require("@lib/users");
function addUserAPI(route) {
    route.post('/add', (req, res) => {
        let b = req.body;
        let count = [];
        let countPhone = [];
        let countLiving = [];
        let info = {};
        if (b.cpf)
            count.push(b.cpf), info.cpf = b.cpf;
        if (b.fullname)
            count.push(b.fullname), info.fullname = b.fullname;
        if (b.nickname)
            count.push(b.nickname), info.nickname = b.nickname;
        if (b.password)
            count.push(b.password), info.password = b.password;
        if (b.birth)
            count.push(b.birth), info.birth = b.birth;
        if (b.role)
            count.push(b.role), info.role = b.role;
        if (b.admission)
            count.push(b.admission), info.admission = b.admission;
        if (b.registry)
            count.push(b.registry), info.registry = b.registry;
        if (b.gender)
            count.push(b.gender), info.gender = b.gender;
        if (b.phone) {
            info.phone = {};
            if (b.phone.landline)
                countPhone.push(b.phone.landline),
                    info.phone.landline = b.phone.landline;
            if (b.phone.mobile)
                countPhone.push(b.phone.mobile),
                    info.phone.mobile = b.phone.mobile;
        }
        if (b.living) {
            info.living = {};
            if (b.living.state)
                countLiving.push(b.living.state),
                    info.living.state = b.living.state;
            if (b.living.city)
                countLiving.push(b.living.city),
                    info.living.city = b.living.city;
            if (b.living.district)
                countLiving.push(b.living.district),
                    info.living.district = b.living.district;
            if (b.living.street)
                countLiving.push(b.living.street),
                    info.living.street = b.living.street;
            if (b.living.number)
                countLiving.push(b.living.number),
                    info.living.number = b.living.number;
            if (b.living.complement)
                countLiving.push(b.living.complement),
                    info.living.complement = b.living.complement;
            if (b.living.zip)
                countLiving.push(b.living.zip),
                    info.living.zip = b.living.zip;
        }
        if (count.length < 9 || countPhone.length < 1 || countLiving.length < 7
            || !string_1.isString(count) || !string_1.isString(countPhone) || !string_1.isString(countLiving)) {
            res.status(400).json(config_1.err(0x0001F));
            return;
        }
        database_1.connect((con, db, err) => {
            if (err) {
                res.status(500).json(err);
                console.log(err.internal);
                return;
            }
            users_1.Users.addUser(info, db, (resolved, err) => {
                if (err) {
                    if (err.err === 0xFFFFF) {
                        res.status(500).json(err);
                        console.log(err.internal);
                    }
                }
                else {
                    res.json(config_1.err(0, "Usuário adicionado."));
                }
                con.close();
            });
        });
    });
}
exports.addUserAPI = addUserAPI;

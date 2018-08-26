import { User } from '@interfaces';
import { connect } from '@lib/database';
import { Router } from 'express';
import { isString } from '@tools/string';
import { err as e } from '@lib/config';
import { Users } from '@lib/users';


export function addUserAPI(route: Router): void {
    route.post('/add', (req, res): void => {
        let b = req.body;
        let count: Array<any> = [];
        let countPhone: Array<any> = [];
        let countLiving: Array<any> = [];
        let info: User = {};

        if (b.cpf)       count.push(b.cpf),       info.cpf       = b.cpf;
        if (b.fullname)  count.push(b.fullname),  info.fullname  = b.fullname;
        if (b.nickname)  count.push(b.nickname),  info.nickname  = b.nickname;
        if (b.password)  count.push(b.password),  info.password  = b.password;
        if (b.birth)     count.push(b.birth),     info.birth     = b.birth;
        if (b.role)      count.push(b.role),      info.role      = b.role;
        if (b.admission) count.push(b.admission), info.admission = b.admission;
        if (b.registry)  count.push(b.registry),  info.registry  = b.registry;
        if (b.gender)    count.push(b.gender),    info.gender    = b.gender;

        if (b.phone) {
            info.phone = {};
            if (b.phone.landline) countPhone.push(b.phone.landline),
                info.phone.landline = b.phone.landline;
            if (b.phone.mobile) countPhone.push(b.phone.mobile),
                info.phone.mobile = b.phone.mobile;
        }

        if (b.living) {
            info.living = {};
            if (b.living.state) countLiving.push(b.living.state),
                info.living.state = b.living.state;
            if (b.living.city) countLiving.push(b.living.city),
                info.living.city = b.living.city;
            if (b.living.district) countLiving.push(b.living.district),
                info.living.district = b.living.district;
            if (b.living.street) countLiving.push(b.living.street),
                info.living.street = b.living.street;
            if (b.living.number) countLiving.push(b.living.number),
                info.living.number = b.living.number;
            if (b.living.complement) countLiving.push(b.living.complement),
                info.living.complement = b.living.complement;
            if (b.living.zip) countLiving.push(b.living.zip),
                info.living.zip = b.living.zip;
        }

        if (count.length < 9 || countPhone.length < 1 || countLiving.length < 7
            || !isString(count) || !isString(countPhone) || !isString(countLiving))
        {
            res.status(400).json(e(0x0001F));
            return;
        }

        connect((con, db, err): void => {
            if (err) {
                res.status(500).json(err);
                console.log(err.internal);
                return;
            }
            Users.addUser(info, db, (resolved, err): void => {
                if (err) {
                    if (err.err === 0xFFFFF) {
                        res.status(500).json(err);
                        console.log(err.internal);
                    }

                } else {
                    res.json(e(0, "Usuário adicionado."));
                }
                con.close();
            });
        });

    });
}

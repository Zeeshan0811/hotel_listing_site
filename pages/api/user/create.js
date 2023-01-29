import User from '../../../database/models/User';
import { hash } from 'bcrypt'
var randomstring = require("randomstring");

export default async function Handler(req, res) {
    const { firstName, lastName, type, email, rawPass, phone, address, address_line_2, city, country, zip } = req.body;

    if (req.method !== 'POST') {
        res.json({ message: "Only post method is allowed!..." });
    }

    hash(rawPass, 12, async function (err, password) {
        // res.send(password);
        let uri = randomstring.generate();

        await User.create({
            uri,
            type,
            firstName,
            lastName,
            phone,
            email,
            rawPass,
            password,
            address,
            address_line_2,
            city,
            country,
            zip

        }).then(function (users) {
            if (users) {
                res.send(users);
            } else {
                res.status(400).send('Error in insert new record');
            }
        });
    });
}

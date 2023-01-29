import User from '../../../database/models/User';
import { hash } from 'bcrypt'
var randomstring = require("randomstring");

export default async function Handler(req, res) {
    const { update_type, userId, firstName, lastName, email, pre_password, new_password, phone, address, address_line_2, city, country, zip } = req.body;

    if (req.method !== 'PUT') {
        res.json({ message: "Only post method is allowed!..." });
    }


    // Update New Room
    const user = await User.findOne({
        where: { userId: userId },
        attributes: {
            exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
        },
    });

    if (user) {
        if (update_type == 'profile') {
            (firstName) ? (user.firstName = firstName) : '';
            (lastName) ? (user.lastName = lastName) : '';
            (phone) ? (user.phone = phone) : '';
            (email) ? (user.email = email) : '';
            (address) ? (user.address = address) : '';
            (address_line_2) ? (user.address_line_2 = address_line_2) : '';
            (city) ? (user.city = city) : '';
            (country) ? (user.country = country) : '';
            (zip) ? (user.zip = zip) : '';
            await user.save();
        } else if (update_type == 'password') {
            hash(new_password, 12, async function (err, password) {
                user.rawPass = new_password;
                user.password = password;
                await user.save();
            });
        }
        const updated_user = await User.findOne({
            where: { userId: userId },
            attributes: {
                exclude: ['password', 'rawPass', 'created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        res.send(updated_user);
    } else {
        res.status(400).send('Error in updating new record');
    }
}

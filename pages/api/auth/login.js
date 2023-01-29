import { sign } from "jsonwebtoken";
import { serialize, cookie } from "cookie";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

import { compare } from 'bcrypt';
import User from '../../../database/models/User';

const secret = process.env.SECRET_AUTH_KEY;

export default async function Handler(req, res) {
    const { email, password } = req.body;

    if (req.method !== 'POST') {
        res.json({ message: "Only post method is allowed!..." });
    }

    const user = await User.findOne({
        where: { email },
        attributes: {
            exclude: ['rawPass', 'created_by', 'updated_by', 'created_at', 'updated_at']
        },
    });


    if (!user) {
        res.status(401).json({ message: "Invalid Credentials!" });
    }

    compare(password, user.password, function (err, result) {
        if (!err && result) {
            user.password = null;
            const claims = { email: user.email, userId: user.userId }
            const token = sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                    email: user.email,
                    userId: user.userId,
                    type: user.type
                },
                secret
            );
            res.setHeader('Set-Cookie', serialize('auth', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                path: '/'
            }));
            setCookie('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 });

            res.status(200).json({ message: "Success", token, user });
        } else {
            res.status(401).json({ message: "Invalid Credentials!" });
        }
    });
}
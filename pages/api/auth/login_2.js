import { sign } from "jsonwebtoken";
import { serialize } from "cookie";


const secret = process.env.SECRET_AUTH_KEY;

export default async function Handler(req, res) {
    const { email, password } = req.body;

    if (req.method !== 'POST') {
        res.json({ message: "Only post method is allowed!..." });
    }

    // console.log(secret);

    // Check in the database
    // if a user with this username
    // and password exists

    if (username === "Admin" && password === "Admin") {
        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
                username: username,
            },
            secret
        );

        const serialised = serialize("OursiteJWT", token, {
            httponly: true,
            secure: process.env.NODE_ENV != "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });

        res.setHeader("Set-Cookie", serialised);

        res.status(200).json({ message: "Success!" });
    } else {
        res.json({ message: "Invalid Credentials" });
    }
}
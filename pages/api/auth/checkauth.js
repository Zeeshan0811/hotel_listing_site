import { verify } from "jsonwebtoken";

const secret = process.env.SECRET_AUTH_KEY;

export default async function Handler(req, res) {
    const { cookies } = req;

    const token = cookies.auth;

    if (!token) {
        return res.status(500).json({ message: "Authentication Failed!..." });
    }


    verify(token, secret, async function (err, decoded) {
        if (!err && decoded) {
            return res.status(200).json({ message: "Verified", decoded });
        } else {
            return res.status(500).json({ message: "Not Verified!" });
        }
    });


    // var decoded = verify(token, secret);
    // console.log(decoded) // bar


    // return res.json({ data: "Top secret data!", decoded });
    // return res.json({ data: "Top secret data!", jwt: jwt });
}
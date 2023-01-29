import { serialize } from "cookie";

export default async function Handler(req, res) {
    const { cookies } = req;

    const jwt = cookies.auth;

    if (!jwt) {
        return res.json({ message: "Bro you are already not logged in..." });
    } else {
        const serialised = serialize("auth", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: "/"
        });
        res.setHeader("Set-Cookie", serialised);
        res.status(200).json({ message: "Successfully logged out!" });
        res.end();
    }
}
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;

export default function middleware(req) {
    const { cookies } = req;
    const jwt = cookies.OursiteJWT;
    const url = req.url;


    if (url.includes("/login")) {
        console.log("From Middleware");
        if (jwt) {
            try {
                verify(jwt, secret);
                return NextResponse.next("/admin");
            } catch (e) {
                return NextResponse.next();
            }
        }
    }

    if (url.includes('/admin')) {
        return NextResponse.redirect("/login");


        if (jwt === undefined) {
            return NextResponse.redirect("/login");
        }

        try {
            const user = verify(jwt, secret);
            console.log(user);
            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect("/login");
        }
    }

    return NextResponse.next();

}
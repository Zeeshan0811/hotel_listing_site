import { getToken } from 'next-auth/jwt';
import jwt from "next-auth/jwt"
import { NextResponse } from 'next/server';


export async function middleware(req, ev) {
    // 'secret' should be the same 'process.env.SECRET' use in NextAuth function
    const session = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRECT }); console.log('session in middleware: ', session)
    // const session_decoded = jwt.decode(token, process.env.NEXTAUTH_SECRECT)
    console.log(context.req.cookies["next-auth.session-token"]);

    if (!session) {
        // return NextResponse.redirect('/login')
        return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
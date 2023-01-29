// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'
// import { verify } from "jsonwebtoken";
import { SignJWT, jwtVerify } from 'jose';

const secret = process.env.SECRET;

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const { cookies } = request;
    const jwt = cookies.OursiteJWT;
    const url = request.url;
    console.log("My URL: " + url);

    if (url.includes("/login")) {
        // console.log("Included Admin");
        if (jwt) {
            try {
                verify(request, secret);
                return NextResponse.next();
            } catch (e) {
                return NextResponse.redirect(new URL('/admin', request.url));
            }
        }
    }

    if (url.includes("/admin")) {
        try {
            const user = verify(jwt, secret);
            console.log(user);
            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    // return NextResponse.redirect(new URL('/about-2', request.url))
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin/:path*',
}

// request.cookies.has('nextjs') // => true
//   request.cookies.delete('nextjs')
//   request.cookies.has('nextjs') // => false
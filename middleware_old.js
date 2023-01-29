// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'
// import { verify } from "jsonwebtoken";
import { SignJWT, jwtVerify } from 'jose';

const secret = process.env.SECRET;

export function middleware(request) {
    const { cookies } = request;
    const jwt = cookies.OursiteJWT;
    const url = request.url;
    console.log("My URL: " + url);


    if (url.includes("/admin")) {
        console.log('Yahooo Admin');
    } else {
        console.log('Yahooo Guest');
    }

}
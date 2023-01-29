import { NextRequest, NextResponse } from 'next/server'
import { SignJWT, jwtVerify } from 'jose';
// import jwt from "jsonwebtoken";
import { withAuth } from "next-auth/middleware"
// import NextAuth from 'next-auth';



const secret = process.env.SECRET_AUTH_KEY;
const nextAuthOptions = (req, res) => {
    const { cookies } = req;
    const token = cookies.get('auth');
    // return {

    // }
    console.log(token);
}

// export default (req, res) => {
//     return NextAuth(req, res, nextAuthOptions(req, res))
// }

// export default withAuth({
//     callbacks: {
//         authorized({ req, token }) {
//             // `/admin` requires admin role
//             if (req.nextUrl.pathname === "/admin") {
//                 // return token?.userRole === "admin"
//                 console.log(token);
//             } else {
//                 console.log("Nooo");
//             }
//             // `/me` only requires the user to be logged in
//             return !!token
//         },
//     },
// })

// export function middleware(request) {
//     let res = NextResponse.next();
//     const { cookies } = request;
//     const token = cookies.get('auth');
//     const jwe = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4R0NNIn0..Mf_ay7o5AbhoPIzUBHAf0Q.gPvVoADDE0whp7azdStnG35ON94mcnfXgWL8B4QFbyfz5n0F9oiqegnCKFMq2pAmfMrdS2E0yJ53viGxsziKX7KEvNEzzCZnAPYqZ2BKT1kY7SLobpU5eA79B1h8_psaxRdVXCE-12bb-Ds32PD5nq9D9fXbCjRrGKTr9pwHNyGFAzrWw_K5nB1IAwloutQUwXCX8GLkavjCSiD1VumSb59XrIPrcay7wZFkWCL8JK7GKwEc_2_X3uU9dLjpGzWM549u8iO6kDWMoRukAtgK26mEIwx_BhEsGXDpMh7OtO6VkDVZYBdLdUwkq3A7OvYbDLnleE-Z2e7tHtEwLBwrRUV6BgRaHcxjtUYEbJ36YzlCrGQi9hNUmDBFoZ-Y9D3buXJkxdLR08hEem7ds0QBdbugo4Uf6FQLP7Xh4PUq1hVd_fbVs-zX1aPcXnuI7uP_agUOzt-p9VK90mwn73ct7sw_nDExtolc_uESxXOptH4zfd91ayZjsLGRrJG60wlV1CXlBcM.ojgJx4stF85F9UKXp_AxRw';
//     const url = request.url;

//     console.log(token);
//     const verifyData = jwtVerify(jwe, secret);
//     console.log(verifyData);

//     return NextResponse.next();

// }


export const config = {
    matcher: '/admin/:path*',
}
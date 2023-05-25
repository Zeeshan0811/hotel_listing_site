import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";
import jwt from "jsonwebtoken"

const secret = process.env.SECRET_AUTH_KEY;
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRECT,
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                const { email, password } = credentials;
                const api_url = process.env.API_URL + 'auth/login';
                const response = await axios.post(api_url, credentials);
                if (response) {
                    let user = response.data.user;
                    return user;
                }

                // if (credentials.email == "admin@admin.com" && credentials.password == "123456") {
                //     let user = {
                //         name: "ABC",
                //         firstName: "Zeeshan",
                //         lastName: "Akhtar",
                //         email: "abcsdfsdf@admin.com"
                //     }
                //     return user;
                // }
                return null
            }
        })
    ],
    session: {
        // jwt: true,
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRECT,
        encryption: true,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    }

}
export default NextAuth(authOptions)


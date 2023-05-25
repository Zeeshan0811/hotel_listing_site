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
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            // credentials: {
            //     email: "admin@admin.com",
            //     password: "123456"
            // },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                if (credentials.email == "admin@admin.com" && credentials.password == "123456") {
                    const user = {
                        name: "Parvez Hoosain",
                        firstName: "Parvej",
                        lastName: "Hossain",
                        email: credentials.email
                    }
                    let latestUser = {
                        name: "ABC",
                        firstName: "Zeeshan",
                        lastName: "Akhtar",
                        email: "abcsdfsdf@admin.com"
                    }
                    return latestUser;
                }
                // if (credentials.email == "admin@admin.com" && credentials.password == "123456") {
                //     const user = {
                //         name: credentials.name,
                //         firstName: "Parvej",
                //         lastName: "Hossain",
                //         password: credentials.password,
                //         email: credentials.email
                //     }
                //     return user;
                // }


                // const url = "/api/auth/login_present";
                // const user = await axios.post(url, credentials);
                // if (response) {
                //     console.log(response.data)
                //     return response.data;
                // }
                return null
            }
        })
    ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRECT,
        encryption: true,
    },
    callbacks: {
        jwt(params) {
            return params.token;
        },

        async session({ session, token, user }) {

            session.accessToken = token.accessToken;
            session.user = latestUser;
            return session;
        }

    }

}
export default NextAuth(authOptions)


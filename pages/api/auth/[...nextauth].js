import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
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
            async authorize(credentials, req) {
                if (credentials.email == "admin@admin.com" && credentials.password == "123456") {
                    return {
                        user: {
                            name: "ABC",
                            email: "abc@admin.com"
                        }
                    }
                }
                return null
            }
        })
    ],
    callbacks: {
        async session({ session }) {
            session.user = {
                name: "ABC",
                email: "abcsdfsdf@admin.com"
            }

            return session;
        }

    }

}
export default NextAuth(authOptions)


import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (
                    credentials?.email === "admin@example.com" &&
                    credentials?.password === "123456"
                ) {
                    return {
                        id: "1",
                        name: "Admin",
                        email: "admin@example.com",
                    };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // ✅ now correctly typed
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // ✅ Hardcoded credentials (task requirement)
                if (
                    credentials?.email === "admin@example.com" &&
                    credentials?.password === "123456"
                ) {
                    return {
                        id: "1",
                        name: "Admin User",
                        email: "admin@example.com",
                    };
                }

                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
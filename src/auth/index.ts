import db from "../../prisma/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google,
    Github,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jondoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials): Promise<User | null> {
        if (
          credentials == null ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Invalid credentials");
        }

        const email = credentials.email;
        const password = credentials.password;

        if (email == null || password == null) return null;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (user && user.password === password) {
          return user as User;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.role = user.role;

      return session;
    },
  },
});

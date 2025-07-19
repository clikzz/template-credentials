import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "../db";
import { compare } from "bcryptjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      rut: string;
      role: string;
    };
  }

  interface User {
    rut: string;
    role: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        rut: { label: "Rut", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Partial<Record<"rut" | "password", unknown>>,
      ) {
        if (!credentials?.rut || !credentials?.password) {
          return null;
        }

        const rut = credentials.rut as string;
        const password = credentials.password as string;

        const existingUser = await db.user.findUnique({
          where: {
            rut: rut,
          },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(password, existingUser.password);

        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id,
          name: existingUser.name,
          rut: existingUser.rut,
          email: existingUser.email,
          role: existingUser.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rut = (user as any).rut;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          rut: token.rut as string,
          email: token.email as string,
          name: token.name as string,
          role: token.role as string,
        },
      };
    },
  },
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;

import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db(process.env.MONGODB_DB),
    }),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === "google") {
          // first and last name attributes are available for GoogleProfile
          // -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts
          user.name = {
            first: String(profile.given_name),
            last: String(profile.family_name),
          };
        }
        return true;
      },
      async session({ session, user }) {
        session.user.name = user.name;
        return session;
      },
    },
    pages: {
      verifyRequest: "/verify-signin", // Used for check email page
      newUser: "/", // Redirect new users to apply (replace to '/' when apps close)
    },
    secret: process.env.SECRET,
  });
}

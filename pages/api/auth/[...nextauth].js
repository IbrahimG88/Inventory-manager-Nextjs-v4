import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

const options = {
  adapter: MongoDBAdapter(clientPromise),
  site: process.env.NEXTAUTH_URL,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // the session will last 30 days
  },
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);

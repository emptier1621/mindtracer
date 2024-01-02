import { connectDB } from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { Usuario } from "../../../../../types/User";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Ej. myname@email.com" },
        password: { label: "Contraseña", type: "password", placeholder: "*******" }
      },
      async authorize(credentials: any, req: any) {

        await connectDB()

        console.log(credentials)
        const userFound = await User.findOne({ email: credentials?.email }).select("+password")
        if (!userFound) throw new Error("Credenciales inválidas.")

        const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

        if (!passwordMatch) throw new Error("Credenciales inválidas.")

        console.log(userFound)

        return userFound
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // Add property to session, like an access_token from a provider.
      session.user = token.user as Usuario
      return session
    }
  },
  pages: {
    signIn: '/'
  }
}
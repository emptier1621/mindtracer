import { connectDB } from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { Usuario } from "../../../../../types/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email:{label:"Email", type:"email",placeholder:"Ej. myname@email.com"},
        password: { label:"Contraseña", type:"password", placeholder:"*******" }
      },
      async authorize(credentials:any, req:any){
       
        await connectDB()

        console.log(credentials)
        const userFound = await User.findOne({email:credentials?.email}).select("+password")
        if(!userFound) throw new Error("Credenciales inválidas.")

        const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

        if(!passwordMatch) throw new Error("Credenciales inválidas.")

        console.log(userFound)
        
        return userFound
      },
    }),
  ],
  callbacks: {
    jwt({account, token, user, profile, session}){
      if(user) token.user = user;
      return token;
    },
    session({session, token}){
      session.user = token.user as Usuario;
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST}
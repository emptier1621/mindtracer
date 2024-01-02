import { connectDB } from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { Usuario } from "../../../../../types/User";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
import NextAuth from "next-auth";
import { Usuario } from "./User";

declare module "next-auth" {
  interface Session {
    user: Usuario & DefaultSession["user"];
  } 
  interface JWT {
    /** OpenID ID Token */
    idToken?: string
  }
  
}
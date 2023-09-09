import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import { getSession } from "next-auth/react"
import { getServerSession } from "next-auth"
export async function GET(){
  try {
    await connectDB()
    const session = await getServerSession()
    if(session){
    const email = session?.user.email
    
    const userLoged = await User.findOne({email}).select('+IDB')
    if(!userLoged.IDB){
      return NextResponse.json(
        {idb:{puntaje:0,clasificacion:0,respuestas:[]}},
        {status:200}
      )
    }
      const idb = userLoged.IDB
      return NextResponse.json(
        {idb:idb},
        {status:200}
      )

    
  }
  } catch (error) {
    console.log(error)
    if(error instanceof mongoose.Error.ValidationError){
      return NextResponse.json(
        {message:error},
        {status: 400}  
      )
    }
  }
}
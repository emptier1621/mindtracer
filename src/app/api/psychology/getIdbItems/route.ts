import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import { getSession } from "next-auth/react"
import { getServerSession } from "next-auth"
export async function GET(request: Request){
  try {
    await connectDB()
    const session = await getServerSession()
    if(session){
    const email = session.user.email
    
    const userLoged = await User.findOne({email}).select('+IDB')
      const idb = userLoged.IDB
      return NextResponse.json(
        {idb:idb},
        {status:200}
      )

    
  }else{
    return NextResponse.json(
      {message:"error de sesion"},
      {status: 400}  
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
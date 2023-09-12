import { NextRequest, NextResponse } from "next/server"
import mongoose from "mongoose"
import { connectDB } from "@/libs/mongodb"
import User from "@/models/user"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/authOptions"

export async function GET(request: NextRequest, response:NextResponse){
  try {
    await connectDB()
    const session = await getServerSession(authOptions)
    if(session){
    const email = session.user.email
    
    const userLoged = await User.findOne({email}).select('+TAT')
      const tat = userLoged.TAT
      return NextResponse.json(
        {tat:tat},
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
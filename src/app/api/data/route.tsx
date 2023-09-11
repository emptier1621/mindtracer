import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import fastcsv from 'fast-csv';
import user from '@/models/user'
import { NextApiResponse } from 'next'
import fs from "fs"


export async function GET(request: Request, res:NextApiResponse) {
  try {
    await connectDB()
      const session = await getServerSession()
      if(!session || session.user.email !== 'admin@mindtracer.com'){
       return NextResponse.json(
        {
          message: "Credenciales invalidas"
        },
        {
          status: 400,
        }
      )}
      const data = await user.find({}).select('+TAT +IDB')

      return NextResponse.json(
        {message: data},
        {status:200}  
      )

  } catch (error) {
    console.log(error)
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      )
    }
    return NextResponse.error();
  }
}
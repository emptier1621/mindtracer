import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import user from '@/models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { createObjectCsvWriter } from 'csv-writer';


export async function GET(request: NextApiRequest, response:NextApiResponse) {
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
      const data = await user
  .find({
    $and: [
      { "TAT": { $size: 20 } }, // Verifica que el campo 'TAT' tenga un tamaño de 20
      { "IDB.respuestas": { $size: 21 } } // Verifica que el campo 'IDB.respuestas' tenga un tamaño de 21
    ]
  })
  .select('+TAT +IDB');
      return NextResponse.json({
        status: 200,
        message: {data}
      })

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
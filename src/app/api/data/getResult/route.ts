import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/mongodb'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import user from '@/models/user'
import { authOptions } from '../../auth/[...nextauth]/authOptions'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    await connectDB()
    const session = await getServerSession({ req: request, res: response, ...authOptions })
    if (!session) {
      return NextResponse.json(
        {
          message: "Credenciales invalidas"
        },
        {
          status: 400,
        }
      )
    }
    let email: string | undefined = ""
    if (session) {
      email = session.user.email
    }

    const data = await user.findOne({ email }).select("IDB.clasificacion")
    if (data) {
      return NextResponse.json(
        {
          message: data
        },
        {
          status: 200,
        }
      )
    }

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
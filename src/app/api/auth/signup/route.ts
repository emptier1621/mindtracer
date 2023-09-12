import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

export async function POST(request: NextRequest, response:NextResponse) {
  try {
    await connectDB()

    const { nombreCompleto, genero, grado, password, email, edad } = await request.json()

    if (!password || password.length < 6) {
      return NextResponse.json({ message: "La contraseña debe tener al menos 6 caracteres." }, { status: 400 })
    }    

    const userFound = await User.findOne({ email })
    
    if (userFound) {
      return NextResponse.json(
        {
          message: "El email ya está registrado."
        },
        {
          status: 409,
        }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      nombreCompleto,
      genero,
      grado,
      password: hashedPassword,
      email,
      edad
    })

    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json(
      {
        nombreCompleto,
        email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      { status: 201 }
    );
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
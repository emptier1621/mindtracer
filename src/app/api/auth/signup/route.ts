import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import bcrypt from 'bcryptjs'
export async function POST(request: Request) {
  const { nombreCompleto, genero, grado, password, email, edad } = await request.json()
  console.log(nombreCompleto, genero, grado, password, email, edad)
  if (!password || password.length < 6) {
    return NextResponse.json({ message: "La contraseña debe tener al menos 6 caracteres." }, { status: 400 })
  }

  try {
    await connectDB()
    const userFound = await User.findOne({ email })
    if (userFound) return NextResponse.json({
      message: "El email ya está registrado."
    })

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
    return NextResponse.json(savedUser)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return NextResponse.json(
        {message: error.message},
        {status:400}
      )
    }
  }
}
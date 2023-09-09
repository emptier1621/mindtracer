import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'

export async function POST(request: Request) {
  const { sintoma, respuesta } = await request.json();
  const session = await getServerSession()
  const email = session?.user.email
  if(!email){
    return NextResponse.json({ message: "no loged user... " }, { status: 400 })
  }
  const user = await User.findOne({ email }).select('+IDB');

  if (!user) {
    return NextResponse.json({ message: "No encontro el usuario" }, { status: 400 })
  }
  if(!user.IDB){
    try {
      user.IDB = {
        puntaje: respuesta,
        clasificacion: respuesta < 13 ? 1 : respuesta < 19 ? 2 : respuesta < 28 ? 3 : 4,
        respuestas: [{ sintoma, intensidad: respuesta }],
      };
      await user.save()
      return NextResponse.json({ message: "exito" }, { status: 200 })
    } catch (error) {
      console.log(error)
      return NextResponse.json({ message: error }, { status: 400 })
    }
    
    
  }

  try {
    user.IDB.respuestas.push({ sintoma: sintoma, intensidad: respuesta });
    user.IDB.puntaje += respuesta;
    user.IDB.clasificacion = user.IDB.puntaje < 13 ? 1 : user.IDB.puntaje < 19 ? 2 : user.IDB.puntaje < 28 ? 3 : 4;
  
    await user.save();
    return NextResponse.json({status:200, message: 'all ok' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({status:400, message: 'error'})
  }

 

  
}
import { NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'

export async function POST(request: Request) {
  try {
    await connectDB()

    const { sintoma, respuesta } = await request.json()
    console.log(sintoma,respuesta)
    const session = await getServerSession()
    if(session){
      const email = session.user.email
      console.log(email)

      if (!sintoma || sintoma.length < 1 || sintoma.length > 50) {
        return NextResponse.json({ message: "max. 50 caracteres." }, { status: 400 })
      }

      const usuario = await User.findOne({ email }).select('+IDB')

      if (!usuario) {
        return NextResponse.json(
          { message: "Usuario no encontrado." },
          { status: 400 }
        );
      }

      if (!usuario.IDB) {
        usuario.IDB = { puntaje: 0, clasificacion: 0, respuestas: [] }
      }

      const idb = usuario.IDB
      const sintomas = idb.respuestas.map((o: { sintoma: string, intensidad: number }) => {
        return o.sintoma
      });

      if (!respuesta) {
        return NextResponse.json(
          {
            message: "Es necesaria una respuesta."
          },
          {
            status: 400,
          }
        )
      }
      if (sintomas.length === 0) {
        usuario.IDB.puntaje = respuesta
        usuario.IDB.clasificacion = usuario.IDB.puntaje<13?1:usuario.IDB.puntaje<19?2:usuario.IDB.puntaje<28?3:4
        usuario.IDB.respuestas.push({ sintoma:sintoma, intensidad:respuesta })
        const savedUser = await usuario.save()
        return NextResponse.json(
          {
            message: `Sintoma ${sintoma} guardado: ${savedUser}`
          },
          {
            status: 200,
          }
        )
      } else {
        if (sintomas.includes(sintoma)) {
          return NextResponse.json(
            { message: "El sintoma ya existe." },
            { status: 400 }
          )
        } else {
          usuario.IDB.respuestas.push({ sintoma, intensidad:respuesta })
          usuario.IDB.puntaje = usuario.IDB.puntaje + respuesta
          usuario.IDB.clasificacion = usuario.IDB.puntaje<13?1:usuario.IDB.puntaje<19?2:usuario.IDB.puntaje<28?3:4
          const savedUser = await usuario.save()

          return NextResponse.json(
            {
              message: `Sintoma ${sintoma} guardado: ${savedUser}`
            },
            {
              status: 200,
            }
          )
        }
      }
    }
  } catch (error) {
    console.log(error)
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message }, 
      )
    }
    return NextResponse.error();
  }
}
import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/user'
import { connectDB } from '@/libs/mongodb'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/authOptions'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectDB()

    const { lamina, texto } = await request.json()
    const session = await getServerSession({ req: request, res: response, ...authOptions })
    if (session) {
      const email = session.user.email
      console.log(email)

      if (!lamina || lamina < 1 || lamina > 20) {
        return NextResponse.json({ message: "Lamina invalida" }, { status: 400 })
      }

      const usuario = await User.findOne({ email }).select('+TAT')

      if (!usuario || !usuario.TAT) {
        return NextResponse.json(
          { message: "Usuario no encontrado o no tiene propiedad TAT." },
          { status: 400 }
        );
      }

      const tat = usuario.TAT
      const laminas = tat.map((o: { lamina: Number }) => {
        return o.lamina
      });



      if (!texto || texto.length >= 2000) {
        return NextResponse.json(
          {
            message: "Es necesaria una respuesta ó es demasiado larga."
          },
          {
            status: 400,
          }
        )
      }
      if (laminas.length === 0) {

        usuario.TAT.push({ lamina, texto })
        const savedUser = await usuario.save()
        return NextResponse.json(
          {
            message: `Lamina ${lamina} guardada: ${savedUser}`
          },
          {
            status: 200,
          }
        )
      } else {
        if (laminas.includes(lamina + 1)) {
          return NextResponse.json(
            { message: "La lamina ya existe." },
            { status: 400 }
          )
        } else {
          usuario.TAT.push({ lamina, texto })
          const savedUser = await usuario.save()

          return NextResponse.json(
            {
              message: `Lamina ${lamina} guardada: ${savedUser}`
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
        { status: 400 }
      )
    }
    return NextResponse.error();
  }
}
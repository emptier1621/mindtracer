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
      const data = await user.find({}).select('+TAT +IDB')
      // Define el encabezado y el mapeo de columnas para el archivo CSV
      const csvHeader = [
        { id: 'nombreCompleto', title: 'Nombre Completo' },
        { id: 'genero', title: 'Genero' },
        { id: 'grado', title: 'Grado' },
        { id: 'email', title: 'Email' },
        { id: 'edad', title: 'Edad' },
        { id: 'TAT', title: 'TAT' }, 
        { id: 'IDB', title: 'IDB' }, 
      ];


      const csvWriter = createObjectCsvWriter({
        path: 'usuarios.json', // Nombre del archivo CSV
        header: csvHeader,
      });

      await csvWriter.writeRecords(data);

      return NextResponse.json({
        status: 200,
        headers: {
          'Content-Type': 'text/json',
          'Content-Disposition': 'attachment; filename="usuarios.json"',
        },
        body: data,
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
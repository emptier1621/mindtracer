"use client"
import NavBar from '@/components/NavBar'
import {useSession} from 'next-auth/react'

export default function ProfilePage() {

  const { data:session, status } = useSession()

  //stastus "authenticated" significa logueado session.user tiene datos del usuario
  console.log(session, status)
  const name = session?.user.nombreCompleto
  return (
    <div>
      <NavBar/>
      <main className='relative mt-28 h-screen z-40 p-5 text-2xl text-white rounded-xl'>
        <p className='text-center'>Bienvenido, {session?.user.nombreCompleto}. Nos alegra mucho tenerte aquí. Por favor realiza las siguientes pruebas.</p>


      </main>
    </div>
  )
}

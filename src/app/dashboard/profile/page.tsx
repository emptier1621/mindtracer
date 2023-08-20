"use client"
import NavBar from '@/components/NavBar/NavBar'
import {useSession} from 'next-auth/react'

export default function ProfilePage() {

  const { data:session, status } = useSession()

  return (
    <div>
      <NavBar/>
      <main className='w-screen'>
        <p className='text-center'>Bienvenido, {session?.user.nombreCompleto}. Nos alegra mucho tenerte aquí. Por favor realiza las siguientes pruebas.</p>


      </main>
    </div>
  )
}

"use client"
import {useSession} from 'next-auth/react'

export default function ProfilePage() {

  const { data:session, status } = useSession()

  //stastus "authenticated" significa logueado session.user tiene datos del usuario
  console.log(session, status)

  return (
    <div>
      BASHBOARD PROFILE 
      <pre>
        {
          JSON.stringify({
            session,
            status
          })
        }
      </pre>
    </div>
  )
}

import Head from 'next/head'
import './globals.css'
import Providers from './Providers'
import { getSession } from 'next-auth/react'

export const metadata = {
  title: 'MindTracer',
  description: 'Detectar síntomas de depresión con inteligencia artificial.'
}



export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = getSession()
  return (
    <html lang='es' className='dark'>
      <body className='max-w-screen'>
        <div>
          <Providers session={session}>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
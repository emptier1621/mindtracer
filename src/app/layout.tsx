import Head from 'next/head'
import './globals.css'
import Providers from './Providers'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'

export const metadata = {
  title: 'MindTracer',
  description: 'Detectar síntomas de depresión con inteligencia artificial.'
}



export default function RootLayout ({
  children,session
}: {
  children: React.ReactNode,
  session: { session: Session | null } & Record<string, unknown>;
}) {
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
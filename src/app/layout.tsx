import Head from 'next/head'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'MindTracer',
  description: 'Detectar síntomas de depresión con inteligencia artificial.'
}

export const dynamic = 'force-static'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className='dark'>
      <body className='max-w-screen'>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
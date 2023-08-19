import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'MindTracer',
  description: 'Detectar síntomas de depresión con inteligencia artificial'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className='dark'>
      <body className='max-w-screen max-h-screen'>
        <div className='overflow-hidden relative h-screen z-40'>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
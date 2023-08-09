import { ReactElement } from 'react'
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'MindTracer',
  description: 'Detectar síntomas de depresión con inteligencia artificial'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang='es'>
      <body className='max-w-screen max-h-screen overflow-hidden'>
        <Image
         src="/background.jpg" 
         className='absolute z-0 w-screen min-h-screen min-w-screen max-w-max bg-cover overflow-hidden opacity-50' 
         alt={'Background image.'}
         width={1920}
         height={1080}/>
        <div className='overflow-hidden relative h-screen z-40 text-2xl text-white bg-black bg-opacity-75 rounded-xl'>
          {children}
        </div>
      </body>
    </html>
  )
}
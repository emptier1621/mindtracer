import React, { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Login (): ReactElement {
  return (
    <div className='flex items-center justify-center min-h-screen text-center'>
      <div className='relative flex flex-col m-6 space-y-8 bg-opacity-40 bg-pink-600 shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
        <div className='flex flex-col justify-center p-6 md:p-6'>
          <span className='mb-1 text-4xl font-bold'>🚩Bienvenido de nuevo. </span>
          <span className='font-light text-yellow-300 mb-3'>
            <label className='text-white'>¡Nos alegra tenerte de vuelta!</label> Por favor, ingrese sus credenciales. 😋
          </span>
          <div className='py-4'>
            <span id='email' className='mb-2 text-md'>Correo electrónico</span>
            <input type='text' placeholder='alguien@gmail.com' className='focus mt-2 w-full p-2 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black' />
          </div>
          <div className='py-1'>
            <span className='mb-2 text-md'>
              Contraseña
            </span>
            <input type='password' placeholder='Ingrese su contraseña' className='mt-2 w-full p-2 bg-gray-700 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-400 focus:border-none selection:bg-purple-400 selection:text-black' />
          </div>
          <div className='flex justify-between text-justify w-full py-4'>
            <div className='mr-6 hover:cursor-pointer hover:scale-105 transition duration-200'>
              <input id='checkbox' type='checkbox' name='ch' className='mr-2 scale-125' />
              <span className='text-md'>Recordar por 30 días.</span>
            </div>
            <span className='font-bold text-md hover:scale-105 transition duration-200' />
          </div>
          <button className='px-6 py-3 bg-black rounded-lg leading-none flex justify-center items-center divide-x divide-gray-600 hover:cursor-pointer transform hover:scale-105 transition duration-500'>
            <span className='flex justify-center text-center space-x-5 group-hover:text-gray-100 transition'>
              <Image src='/mindtracer.svg' className='invert' width={24} height={24} alt='Logo' />
              <p className='text-3xl pb-1 text-center shadow-2xl cursor-pointer'>Iniciar sesión.</p>
            </span>
          </button>
          <div className='text-center text-gray-400'>
            ¿No tienes una cuenta?
            <span className='font-bold text-black'>
              <Link href='/register' className='text-white text-md hover:opacity-50 transition duration-200'> Registrate aquí</Link>
            </span>
          </div>
        </div>
        <div className='relative'>
          <Image src='/images/loginImg.jpg' alt='login image.' className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' width={350} height={525}/>
          <div className='absolute hidden bottom-10 right4 p-6 bg-black bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block'>
            <span className='text-white text-xl'>
              Descubre la claridad mental con MindTracer: Tu primer paso hacia el equilibrio emocional
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
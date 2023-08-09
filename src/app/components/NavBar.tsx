'use client'
import { ReactElement, useState } from 'react'
import { Link } from '../../../types/utils'
import { IoIosMenu, IoIosCloseCircle } from 'react-icons/io'
import Btn from './Btn'
import Image from 'next/image'
import Logo from './Logo'

export default function NavBar (): ReactElement {
  const links: Link[] = [{ name: 'Recursos', link: '/recursos' }, { name: 'Contacto', link: 'https://github.com/emptier1621' }]
  const [mobileBtnState, setMobileBtnState] = useState(false)

  return (
    <nav className='shadow-md z-40 fixed w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
        <Logo/>
        <div onClick={() => setMobileBtnState(!mobileBtnState)} className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
          {mobileBtnState ? <IoIosCloseCircle /> : <IoIosMenu />}
        </div>
        <ul className={`md:flex md:items-center bg-black md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${mobileBtnState ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
          {
            links.map((link: Link): ReactElement => {
              return (
                <li key={link.link} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} target='_blank' className='text-pink-600 hover:text-white duration-500' rel='noreferrer'>{link.name}</a>
                </li>
              )
            })
          }
          <Btn text='Login' type='login' />
        </ul>
      </div>
    </nav>
  )
}
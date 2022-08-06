import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/logo.png'

import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'


const Footer = () => {
  return (
    

    <footer className='text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full'>
      <div className='flex container mx-auto items-center flex-col sm:flex-row py-8'>

        <Link href='/'>
          <div className='flex justify-center items-center cursor-pointer md:justify-start'>
              <Image src={logo} alt="logo" width='100px' height='50px'/>
          </div>
        </Link>

        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:bordar-gray-200 sm:py-2 sm:mt-0 font-medium text-gray-600 mt-5'>
          c 2022 SarimXahid -
          <Link href='' className='text-gray-600 ml-1'>
            <a className='text-gray-600 ml-2'>
                @sarim
            </a>
          </Link>
        </p>

        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <Link href=''>
            <a className='text-blue-500 hover:text-red-400 transition-all duration-500 mx-3'>
              <AiOutlineTwitter size={23}/>
            </a>
          </Link>
          
        <Link href=''>
          <a className='text-blue-500 hover:text-red-400 transition-all duration-500 mx-3'>
              <FaFacebook size={23}/>
          </a>
        </Link>
          

        <Link href=''>
          <a className='mx-3  text-blue-500 hover:text-red-400 transition-all duration-500'>
              <AiOutlineInstagram size={23} />
          </a>
        </Link>
          

        </span>

      </div>
    </footer>

  )
}

export default Footer
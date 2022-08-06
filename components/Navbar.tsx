import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (

    <nav className='flex items-center justify-between py-6'>

        <Link href='/'>
          <div className='flex justify-start items-center cursor-pointer'>
              <Image src={logo} alt="logo" width='100px' height='50px'/>
          </div>
        </Link>

        <ul className='flex justify-center items-center'>
          <li className='mr-6 font-medium text-gray-600 '>
            <a href="#">About Us</a>
          </li>

          <li className='mr-6 font-medium text-gray-600 '>
            <a href="#">Contact Us</a>
          </li>

          <li className='mr-6 font-medium text-gray-600 '>
            <a href="#">Privacy & Policy</a>
          </li>

          <li className='mr-6 font-medium text-gray-600 '>
            <a href="#">Solutions</a>
          </li>

        </ul>

        <ul className='flex items-center'>

          <li className='mr-6 font-medium text-gray-600 '>
            <a href="" className='hover:text-gray-400 transition-all duration-500'>Login</a>
          </li>

          <li className='font-medium text-gray-600 '>
            <a href="" className='bg-primary text-white p-2 rounded-sm hover:bg-primary-dark transition-all duration-500'>
              SignIn
            </a>
          </li>

        </ul>

    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center h-24 px-4 bg-blue-400 text-white mb-5'>
        <Link to="/" className='text-xl font-bold'>
            Home
        </Link>
        <div className='w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center relative'>
            <img src={cart} alt="cart" className='w-6' />
            <span className='absolute top-2/3 right-1/2 bg-violet-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center' >0</span>
        </div>
    </header>
  )
}

export default Header

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../store/cart';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    })
    setCartCount(total);
  }, [cartItems])
  
  const handleCart = () => {
    dispatch(toggleCart());
  }

  return (
    <header className='flex justify-between items-center h-24 px-4 bg-blue-400 text-white mb-5'>
        <Link to="/" className='text-xl font-bold'>
            Home
        </Link>
        <div className='w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center relative cursor-pointer' onClick={handleCart}>
            <img src={cart} alt="cart" className='w-6' />
            <span className='absolute top-2/3 right-1/2 bg-violet-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center' >{cartCount}</span>
        </div>
    </header>
  )
}

export default Header

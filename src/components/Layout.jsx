import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import { useSelector } from 'react-redux';

const Layout = () => {
  const isCartOpen = useSelector(state => state.cart.isCartOpen);

  return (
    <div className='bg-gray-100'>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-300 ease-in-out ${isCartOpen === false ? "" : "-translate-x-56"}`}>
            <Header />
            <Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout

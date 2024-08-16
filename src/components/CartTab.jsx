import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItems from './CartItems';
import { toggleCart } from '../store/cart';

const CartTab = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleCart());
  }

  return (
    <div className={`fixed top-0 right-0 h-full bg-gray-600 shadow-lg w-96 grid grid-rows-[60px_1fr_60px] transform transition-transform duration-300 ease-in-out  ${isCartOpen === false ? "translate-x-full" : ""} `}>
        <h2 className='p-5 text-white text-2xl font-semibold'>Cart</h2>
        <div className='p-5'>
            {cartItems.map((item) => (
                <CartItems key={item.productId} productId={item.productId} quantity={item.quantity} />
            ))}
        </div>
        <div className='grid grid-cols-2'>
            <button className='bg-gray-200 text-black w-full h-full hover:bg-gray-400' onClick={handleClose}>CLOSE</button>
            <button className='bg-blue-500 text-white w-full h-full hover:bg-blue-600'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab
import React from 'react'
import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import { useSelector, useDispatch } from 'react-redux';  
import { addToCart } from '../store/cart';

const Product = ({id, name, price, image, slug}) => {

  const carts = useSelector((state) => state.cart.items);
  console.log(carts);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <Link to={`/product/${slug}`}>
        <img
          src={image}
          alt="product-image"
          className="w-full h-80 object-cover object-top drop-shadow-lg"
        />
      </Link>
      <h3 className="text-lg py-3 text-center font-medium">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          <strong>₹</strong><span className="text-2xl font-semibold">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={cart} alt="" className="w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product
import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({id, name, price, image, slug}) => {

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <Link to={`/product/${slug}`}>
        <img
          src={image}
          alt="product-image"
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
        />
      </Link>
      <h3 className="text-lg py-3 text-center font-medium">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          ₹<span className="text-2xl font-medium">{price}</span>
        </p>
        {/* <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={iconCart} alt="" className="w-5" />
          Add To Cart
        </button> */}
      </div>
    </div>
  );
}

export default Product
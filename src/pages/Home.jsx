import React from 'react'
import products  from "../products";
import Product from '../components/Product'

const Home = () => {
    console.log(products);
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    </div>  
  )
}

export default Home
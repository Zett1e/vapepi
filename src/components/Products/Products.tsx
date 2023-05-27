import React from 'react'
import ProductCard from './ProductCard'


const Products = () => {
  const products = [
    {
      img: 'device.png',
      text: 'Find the best for you here!'
    },
    {
      img: 'pods.png',
      text: 'Variety of choices availability'
    },
    {
      img: 'disposable.png',
      text: 'Easy, clean & superb flavor'
    },
  ]
  return (
    <div className='space-y-5 mt-10 px-40'>
      {
        products.map((product,index)=> <ProductCard key={index} product={product} /> )
      }
    </div>
  )
}

export default Products
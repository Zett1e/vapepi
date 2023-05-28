import React from 'react'
import ProductCard from './ProductCard'


const Products = () => {
  const products = [
    {
      img: 'devices-mobile.png',
      text: 'Find the best for you here!'
    },
    {
      img: 'pods-mobile.png',
      text: 'Variety of choices availability'
    },
    {
      img: 'disposable-mobile.png',
      text: 'Easy, clean & superb flavor'
    },
  ]
  return (
    <div className='space-y-5 mt-10 md:px-40 px-5'>
      {
        products.map((product,index)=> <ProductCard key={index} product={product} /> )
      }
    </div>
  )
}

export default Products
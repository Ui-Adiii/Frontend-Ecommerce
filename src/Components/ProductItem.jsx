import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name ,price}) => {
  
  const {currency }=useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointers' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='textsm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
import React from 'react'

const ProductCard = ({image,title,pricing}) => {
  return (
    <div className='product-card'>
      <img src={image} alt="" />
      <h5>{title}</h5>
      <span className="pricing">{pricing}</span>
    </div>
  )
}

export default ProductCard

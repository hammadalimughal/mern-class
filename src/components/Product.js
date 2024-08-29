import React from 'react'

const Product = ({title,thumbnail}) => {
  return (
    <div className='prod-item'>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
    </div>
  )
}

export default Product

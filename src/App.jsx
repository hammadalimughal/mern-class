import React, { useEffect, useState } from 'react'
import './App.css'
import tshirtImage from './images/tshirt.jpg'
import thisrtImage2 from './images/thisrt-2.jpg'
import ProductCard from './components/ProductCard'

const App = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    const prodRes = await fetch('https://dummyjson.com/products')
    const prodData = await prodRes.json()
    console.log('prodRes', prodRes)
    console.log('prodData', prodData)
    setProducts(prodData.products)    
  }
  return (
    <div className='product-listing'>
      <button onClick={()=>{
        setCount(count + 1)
        console.log('count',count)
      }}>click me {count}</button>
      {
        products.map((currentProd) => {
          return (
            <ProductCard title={currentProd.title} image={currentProd.thumbnail} pricing={currentProd.price} />
          )
        })
      }
    </div>
  )
}

export default App

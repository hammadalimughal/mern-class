import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import tshirtImage from './images/tshirt.jpg'
import thisrtImage2 from './images/thisrt-2.jpg'
import ProductCard from './components/ProductCard'
import Offcanvas from './components/Offcanvas'
import Navbar from './components/Navbar'

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
      <Navbar />
      <div className="container">
        <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Open OffCanvas</button>
      <button onClick={() => {
        setCount(count + 1)
        console.log('count', count)
      }}>click me {count}</button>
      <div className="row">
        {
          products.map((currentProd) => {
            return (
              <div className="col-4">
              <ProductCard title={currentProd.title} image={currentProd.thumbnail} pricing={currentProd.price} />
              </div>
            )
          })
        }
      </div>
    </div>
    <Offcanvas />
    </div>
  )
}

export default App

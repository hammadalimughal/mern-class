import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('Hammad')
  // let count = 0
  // const changeName = () => {
  //   setName('Hammad Ali')
  // }
  // useEffect(()=>{
  //   // alert("Web Page Loaded")
  // },[count,name])
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App

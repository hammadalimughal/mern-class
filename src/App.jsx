import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Navbar from './components/Navbar'
import figmaIcon from './images/figma-designer.png'
import { MdFavoriteBorder } from "react-icons/md";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card p-3">
            <div className="row">
              <div className="col-3">              
                <img className='img-fluid' src={figmaIcon} alt="" />
              </div>
              <div className="col-7">
                <h5>Figma Designer</h5>
                <p className='description'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
              </div>
              <div className="col-2"><MdFavoriteBorder/></div>
            </div>
            <div className="d-flex">
            <span class="badge text-bg-secondary">Ui Designer</span>
            <span class="badge text-bg-secondary ms-2">Figma </span>
            <span class="badge text-bg-secondary ms-2">Landing Page</span>

            </div>
          </div>
          <div className="card p-3 mt-3">
            <div className="row">
              <div className="col-3">              
                <img className='img-fluid' src={figmaIcon} alt="" />
              </div>
              <div className="col-7">
                <h5>Figma Designer</h5>
                <p className='description'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
              </div>
              <div className="col-2"><MdFavoriteBorder/></div>
            </div>
            <div className="d-flex">
            <span class="badge text-bg-secondary">Ui Designer</span>
            <span class="badge text-bg-secondary ms-2">Figma </span>
            <span class="badge text-bg-secondary ms-2">Landing Page</span>

            </div>
          </div>
        </div>
        <div className="col-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo mollitia magni iste sapiente delectus eveniet facere impedit autem beatae. Cum quidem labore autem eaque unde laboriosam et sequi error odit numquam, doloribus quo voluptate mollitia ut ad rerum dolores.</div>
        <div className="col-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum tempore dolore fugit dolores aliquam itaque quisquam molestiae in nostrum, officia at, animi reprehenderit? Nam fugit quae exercitationem. Est neque architecto sapiente veritatis blanditiis quaerat nisi tenetur provident iste eos.</div>
      </div>
      </div>
    </div>
  )
}

export default App

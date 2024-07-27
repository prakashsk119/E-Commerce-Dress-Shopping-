import React from 'react'
import  './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <div>
            <h1>Exclusive</h1>
            </div>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
               <img src={exclusive_image} alt="" />
            </div>

      
    </div>
  )
}

export default Offers

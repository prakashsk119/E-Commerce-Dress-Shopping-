import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="product-left">
        <div className="product-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="product-img">
            <img className='product-main-img' src={product.image} alt="" />
        </div>

      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="product-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(143)</p>
        </div>
        <div className="product-right-prices">
            <div className="product-right-old">${product.old_price}</div>
        <div className="product-right-new">${product.new_price}</div>
        </div>
        <div className="product-right-desc">
            A lightweight, usually knitted, pullover shirt, close-fitting and comfortable
            around neckline and short sleeves, worn as an undershirt or outershirt
            garment.
        </div>
        <div className="product-right-size">
            <h1>Select Size</h1>
            <div className="product-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="product-right-category"><span>Category :</span>Women , T-Shirt , Crop Top</p>
        <p className="product-right-category"><span>Tags :</span>Modern, latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay

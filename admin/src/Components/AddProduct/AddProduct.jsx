import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image,SetImage] = useState(false)
    const [productDet,SetProductDet] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandle =(e)=>{
       SetImage(e.target.files[0])
    }

    const changeHandle =(e)=>{
       SetProductDet({...productDet,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDet)
        let responseData;
        let product = productDet;

        let formData = new FormData()
        formData.append('product',image)

        await fetch("http://localhost:3000/upload",{
            method:"POST",
            headers:{
                Accept:"application/json",
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
            product.image = responseData.image_url;
            console.log(productDet)
            await fetch('http://localhost:3000/addproduct',{
              method:'POST',
              headers:{
                Accept:'application/json',
                'content-Type':'application/json',
              },
              body:JSON.stringify(product),

            }).then((resp)=>resp.json()).then((data)=>{
                data.success ? alert("Product Added"):alert("Failed")
            })
        }
    }
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" value={productDet.name} onChange={changeHandle}  name='name' placeholder='Type here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDet.old_price} onChange={changeHandle}  type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDet.new_price} onChange={changeHandle} type="text" name='new_price' placeholder='Type here' />
        </div>

      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDet.category} onChange={changeHandle} name='category' className='add-pdroduct-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>

        </select>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor='file-input'>
            <img src={image ? URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />

        </label>
        <input onChange={imageHandle} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct

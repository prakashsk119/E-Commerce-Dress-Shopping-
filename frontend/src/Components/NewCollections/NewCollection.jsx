import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Item'


const NewCollection = () => {

const[new_collection,SetNew_collection]=useState([])

useEffect(()=>{
  fetch('http://localhost:3000/newcollection')
  .then((response)=>response.json())
  .then((data)=>SetNew_collection(data))
},[])
  return (
    <div className='new'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
           {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })}
        </div>
      
    </div>
  )
}

export default NewCollection

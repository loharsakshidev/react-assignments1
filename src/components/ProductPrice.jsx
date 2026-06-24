import { Button } from 'bootstrap'
import React, { useState } from 'react'

const ProductPrice = () => {
    const[quantity, setQuantity] = useState(0)

    const ProductName = "Laptop"
    const Price = 50000
    const totalAmount = quantity * Price

    const handleDecrement = ()=>{
        if(quantity > 1){
            setQuantity(prev => prev-1)
        }
    }

  return (
    <>
    <div className="container">
        <p className='mt-5'>Assignment No. 2</p>
     <h2>Product Laptop</h2>
     <h2>Price ₹50000</h2>
    <button className='btn btn-success me-2' 
    onClick={handleDecrement}> - </button>
    {quantity}
    <button className='btn btn-success ms-2' 
    onClick={()=>setQuantity(prev => prev+1)}> + </button>
    <p> Total Price : {totalAmount}</p>
    </div>
   </>
  )
}

export default ProductPrice

import React, { useEffect, useState } from 'react'
const ITEM_PRICE=5
export default function CalculatePrice() {
    const [quantity,setQuantity] = useState(1)
    const [price,setPrice]=useState(0)
    const handleClick=()=>{
        setQuantity(quantity+1)
    }
    useEffect(()=>{
    setPrice(quantity*ITEM_PRICE)
    },[quantity])
  return (
    <div className='container'>
        <button onClick={handleClick} className='btn'>Add new element</button>
        <br />
        <p>Total price: {price}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function PrimitiveNonPrimitives() {
    console.log('PrimitiveNonPrimitives');
    const [price,setPrice]=useState(0)
    const handleClick=()=>{
    setPrice(price+1)
    }
    useEffect(()=>{console.log('use Effecttt');
    },[price])
    return (
    
        <div className='container'>
            <button className='btn' onClick={handleClick}>Click Me!</button>
        </div>
      )
}

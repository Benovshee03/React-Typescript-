import React, { useEffect, useState } from 'react'

export default function PrimitiveNonPrimitives() {
    console.log('PrimitiveNonPrimitives');
    const [price,setPrice]=useState({
        name:"Benovshe",
        age:20
    })
    const handleClick=()=>{
        setPrice({
            name:"Benovshe",
            age:20
        })
    }
    useEffect(()=>{console.log('use Effecttt');
    },[price])
    return (
    
        <div className='container'>
            <button className='btn' onClick={handleClick}>Click Me!</button>
        </div>
      )
}

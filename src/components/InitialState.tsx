import React, { useEffect, useState } from 'react'
import { Interface } from 'readline'
interface Product{
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}
type ProductType = Product | null;
export default function InitialState() {
    const [ product,setProduct]=useState<ProductType>(null)
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products/1").then((res)=>{
        res.json().then((data)=>{
            setTimeout(() => {
                setProduct(data)
            }, 2000);
        })
})
    },[])
  return (
    <div className='container'>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.category}</p>
        <img src={product?.image} alt={product?.title} />
    </div>
  )
}

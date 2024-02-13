import { log } from 'console'
import React from 'react'
import { useState } from 'react'
export default function UserInfo() {
    const [user,setUser]=useState({
   name:"",
   age:"20",
   email:"benovshee03@gmail.com"
    })
    const handleOnChange=(e:any)=>{
        setUser((prev)=>{
       return {
        ...prev,
        name:e.target.value
    }
        })
    }
    console.log(user);
    
  return (
    <div className='container'>
        <form action="#">
            <input type="text"  placeholder='Please add your info' onChange={handleOnChange}/>
        </form>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
// function increaseNumber(){
//     count++
// }
 function NumberCounter() {
    var [count,setCount] = useState(0)
    function increaseCount(){
        setCount(count+1)
    }
    function decrementCount(){
        setCount(count-1)
    }
  return (<div className='container'>
    <h1>Number Counter</h1>
    <p>Count : {count}</p>
    <br />
    <button className='btn' onClick={increaseCount}> Increment</button>
    <button className='btn' onClick={decrementCount}>Decrement</button>
    </div>
  )
}
export default NumberCounter








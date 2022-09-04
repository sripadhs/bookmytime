
import React,{useState,useEffect} from'react'

function Counter() {
    useEffect(()=>{
        console.log('Mounting')
         return ()=>{
            console.log('Unmounting')
         }
    })
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    return (
        <div>
            <button onClick={increment}>increment</button>
            <h1>Counting:{count}</h1>        
        </div>
    )
}

export default Counter
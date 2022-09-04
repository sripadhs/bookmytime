import React from 'react'
import {Firebase} from'./firebase/config'
import {useState} from 'react'
import './App.css'

function App() {
  const [state,setstate]= useState(' ')
  const [inp,setinp]=useState('')
 
  
  const change=event=>{
    setstate(event.target.value)
  }
  const changeinp=event=>{
    setinp(event.target.value)
  }
  const submit=()=>{
    Firebase.firestore().collection('bookings').add({
      name:{state},
      phone:{inp}
      

    })
    
    
    alert('Booked succesfully!Sujith will call you soon.')
  }
  
  return (
    <div>
      <h3>Freetime 8am and 7pm</h3>
      <br/>
      <br/>
      <img src={process.env.PUBLIC_URL+"IMG_2809.jpg"} alt="" />
      <h5>Sujith S</h5>
      <p>Hello i know that many of you trying to contact me due to my works i can't talk with you.But now there is a solution you can talk with me personally in my freetime!</p>
      <label>Name:</label>
      <br/>
      <input  onChange={change} value={state}/>
      <br/>
      <br/>
      <br/>
      <label>Phone number:</label>
      <br/>
      <input onChange={changeinp} value={inp}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={submit}>Submit</button>
      
      
      

    
    </div>
  )
}

export default App
import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("http://206.189.92.237:4000/api/test")
    .then((res)=> res.json())
    .then((data)=>setMessage(data.message))
    .catch((err)=>{
      console.err("cant't get the message",err)
    })

  },[])

  return (
    <>
    <div>
      <h1>Testing for VPS</h1>
      <p>Message: {message}</p>
    </div>
    </>
  )
}

export default App

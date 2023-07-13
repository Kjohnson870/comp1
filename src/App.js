import React, { useEffect, useState } from 'react';
import './App.css'

function App() {


  const [name,setName]=useState("")


//On every render
useEffect(()=>{
  console.log("I re-rendered")
})

useEffect(()=>{
  console.log("The component is mounted")
},[])

useEffect(()=>{
  console.log(`The name changed!: ${name}`)

  return()=>{
    console.log("The component is unmounted")
  }
})

  return (
    <div>
      <h1>Hello</h1>
      <input value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder="Enter a name"/>
    </div>
  );
}

export default App;

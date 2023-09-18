import React, { useEffect, useState } from 'react'

const UseEffecthook1 = () => {

    const [count ,setCount]=useState(0);


// one way 
useEffect(()=>{

    console.log("i m always called...");
})
// second way with dependencis 
useEffect(()=>{

    console.log("i m always onced call...");
},[])
// 3rd way with dependeices ma value halera
useEffect(()=>{

    console.log("i m always call when counter is update...");
},[count])


  return (
    <div>

<h2>hello useeffect 1</h2>
<h6>{count}</h6>
<button onClick={()=>setCount(count+1)}>click </button>

    </div>
  )
}

export default UseEffecthook1
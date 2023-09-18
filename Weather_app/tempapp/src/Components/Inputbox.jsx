import React, { useState } from 'react'

const Inputbox = () => {


const [data ,setData]=useState(null);

function getData(val){
    console.log(val.target.value);
    setData(val.target.value);
}



  return (
    <div className=''>


<input type="text"  onChange={getData} />
        <h3>Hello , {data}</h3>
    </div>
  )
}

export default Inputbox

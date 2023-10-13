import React, { Fragment } from 'react'
import { useState } from 'react';

const Practise = () => {

const subjetList =["math" ,"english" , "science" ,"social" ,"account" ,"health" ,"optional math"];
const [selectItem ,setSelectItem] = useState();

 const handleSubmit=(e)=>{
 e.preventDefault();
 }
 const handleCheckBox=(e)=>{
  setSelectItem(e.target.value);
  console.log(selectItem)
 }

  return (
<Fragment>
<form action="" onSubmit={handleSubmit}>

    {subjetList.map((sub,index)=>(
        <div className="form-group form-check" key={index}  >
    <input type="checkbox"
     className="form-check-input" 
     id="exampleCheck1" 
  
     
     onChange={handleCheckBox} 
     />
    <label className="form-check-label" htmlFor="exampleCheck1">{sub}</label>  
  </div>
    ))}
    <br/>
<span>selected Item:{selectItem}</span>

    
</form>

</Fragment>
  )
}

export default Practise
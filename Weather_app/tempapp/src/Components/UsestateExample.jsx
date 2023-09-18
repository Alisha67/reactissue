import React, { Fragment, useState } from 'react'

const UsestateExample = () => {
    let [count ,setCount]=useState(0);

const handleCounter=(e)=>{    
    e.preventDefault();  
    // count++
setCount(count);

}
  return (
    <Fragment>
        <h6>{count+1}</h6>
{/* <button onClick={handleCounter}>  click here</button> */}
<button onClick={()=>setCount(count+1)}>click here</button>


    </Fragment>
  )
}

export default UsestateExample
import React, { Fragment } from 'react'

const ArrayList = () => {
    const data=[
{
    name:'hello',  
    address:"nepal"
  
},
{
    name:'hello12',  
    address:"nepwdwal"
  
},
   
{
    name:'hedsada',  
    address:"nepaaddasddl"
  
},
   
   
    ]
  return (
  <Fragment>
<table table-border>
    <th>Name</th>
    <th>Address</th>

   
    {data.map((item)=>{
    return(
<>
<tr >
<td>{item.name}</td>
<td>{item.address}</td>

</tr>

</>
    )
})}
    
</table>


  </Fragment>
  )
}

export default ArrayList
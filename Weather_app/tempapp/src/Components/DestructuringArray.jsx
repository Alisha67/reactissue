import React, { Fragment } from 'react'

const DestructuringArray = () => {
    {/* object creating */}
    let fruits=
        {
        name:"mango",
        price:120,
        kilogram:"1kg"
    }


    
 let {name ,price,kilogram}=fruits;
    console.log(`my name is ${name}`);
  return (
    <Fragment>




    </Fragment>
  )
}

export default DestructuringArray
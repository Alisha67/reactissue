import React, { Fragment, useState } from 'react'



const ConditionalRender = () => {

const [loggedIn ,setLoggedIn]=useState(1); //imp 

  return (
   <Fragment>
{/* for only one time if else ko kaam */}
{/* {loggedIn?<h1>Namaste! Alisha</h1>:<h1>Please log In</h1> } */}


{/* for conditional if else 1 2 3 times */}

{loggedIn==1?<h1>i m user1</h1>:loggedIn==2?<h1>i m user 2</h1>: <h1>i m user3</h1>}

   </Fragment>
  )
}

export default ConditionalRender
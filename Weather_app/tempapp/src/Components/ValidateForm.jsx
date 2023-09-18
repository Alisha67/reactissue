import React, { useState } from 'react'
import { Fragment } from 'react'
const ValidateForm = () => {

    const[name ,setName]=useState();
    const[password,setPassword]=useState();
    const[nameErr ,setNameErr]=useState(false);
    const[passErr ,setPasswordErr]=useState(false);

function formHandler(e){
    e.preventDefault()
    console.log(name ,password)
}

function handleName(e){
let data=e.target.value;
if (data.length < 3){
setNameErr(true)
}
else{
    setNameErr(false)
}
setName(e.target.value)
}

function handlePassword(e){
let pasw=e.target.value;
if (pasw.length < 3){
    setPasswordErr(true)
    }
    else{
        setPasswordErr(false)
    }
    setPassword(e.target.value)
    }

  return (
<Fragment>
<div className="row">
    <div className="col-md-6">
    <form onSubmit={formHandler}>
  <div className="form-group">
    <label>Name</label> <br />
    <p>{nameErr?<span>Invalid name</span>:""}</p>
    <input type="name" value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleName} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label> <br />
    {passErr? <span>Invalid password</span>:""}
    <input type="password" value={password} className="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
</div>



</Fragment>
  )
}

export default ValidateForm
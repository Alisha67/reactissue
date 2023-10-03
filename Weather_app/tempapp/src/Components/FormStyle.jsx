import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../config/axios.config';
import authSvc from './Auth/auth.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../reducers/user.reducer';
const labledesign = { color: 'Blue', fontWeight: 600 }

const errortext = {
  color: 'red',
  float: 'right'
}

const FormStyle = () => {
// step 1 data linay 
  const [credential, setCredential] = useState({
    email: null,
    password: null
  });

const dispatch = useDispatch(); //redux======================================
 const [error, setError] = useState();
 const navigate=useNavigate()
// step 2 events
  const handleChange = (e) => {
    let { name, value } = e.target
    setCredential({
      ...credential,
      [name]: value   /*name chai like email password haru ho key ho and value chai input ma diyeko ho value ho!!*/
    })
    let msg = handleValidation(value, name)
    setError({
      ...error,
      [name]: msg
    })
  }
  // console.log(credentail)S


  // realtime validation is done in handleChange ma but submit garda validation dekhauna paryo bane handleSubmit ma garney*/
  const handleValidation = (value, field) => {  /*value chai hamle diyeko data ho bane field chai email or paasword*/
    let msg = null;
    switch (field) {
      case "email":
        msg = (!value) ? "Email is required *" : "";
        break;
      case "password":
        msg = (!value) ? "Password is required *" : "";
        break;
    }
    setError({
      ...error,
      [field]: msg
    }


    )
    return msg;
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    // validation // {email:value ,password:value}=> object.keys always give array so =>['email' ,'password']
    let errmsg = {};
    Object.keys(credential).map((field) => {
      const msg = handleValidation(credential[field], field)
      if (msg) {
        errmsg[field] = msg;
      }
    })
    if (Object.keys(errmsg).length) {
      setError(errmsg);
    }
    else {
          try{
            let response = await authSvc.login(credential)  // authsv componnet bata login function call garney ani tyo login call postrequest http request which call axios instance ani axios instance call api 
        //  web storage ho
            localStorage.setItem('token' , response.data.data.accessToken)
            localStorage.setItem('refreshToken' , response.data.data.refreshToken)
            localStorage.setItem('user' , JSON.stringify(response.data.data.userDetail))
            dispatch(setLoggedInUser(response.data.data.userDetail))
             toast.success('you are successfully log in^^')
            navigate('/addmin')
            
            // toast.success("Welcome to admin panel")
            // return response
          }catch(exception){
            throw exception;
          }

    }
  }

  useEffect(()=>{
    let token = localStorage.getItem('token');
    let user=JSON.parse(localStorage.getItem('user'))
  
      if(token && user){
        toast.info('you are already logged In')
        // navigate('/'+user.role)
        navigate('/addmin')
      }
    
  },[])

  // console.log(errmsg);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form id="fromstyle" style={{ borderRadius: '10px' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={labledesign} >Email address</label> <span style={errortext}>{error?.email}</span>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label style={labledesign} >Password</label> <span style={errortext}>{error?.password}</span>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default FormStyle

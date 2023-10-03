import React, { useEffect } from 'react'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import HomeBanner from './HomeBanner'
import { useDispatch } from 'react-redux'
import {getLoggedIn} from '../../reducers/user.reducer'
const Homelayout = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
let token = localStorage.getItem('token')?? null;
if(token){
  dispatch(getLoggedIn())
}
  },[])
  return (
  <>
  <Home/>
<Outlet/>
<Footer/>

  </>
  )
}

export default Homelayout
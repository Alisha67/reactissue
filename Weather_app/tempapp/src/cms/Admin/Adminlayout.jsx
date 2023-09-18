import React from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'

import '../../assets/CSS/admin.css'

import Admincontent from './Admincontent'
const Adminlayout = () => {
  return (
    <div>

<Navbarr/>

<Admincontent/>


<Footer/>
    </div>
  )
}

export default Adminlayout
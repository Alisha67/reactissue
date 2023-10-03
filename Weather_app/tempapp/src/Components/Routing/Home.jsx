import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Home = () => {
 
  // let loggedInUser = JSON.parse(localStorage.getItem('user'))?? null // yo chai local staorage bata ayeko user detail
  
  let loggedInUser = useSelector((rootStore)=>{  //listener
    console.log(rootStore)
   return rootStore.User?.loggedInUser
  })    //store ma bayeko state lai hamro comp lay watch/listen garna paryo bane bane use hook useSeelctor


  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  {
    loggedInUser ? <>{loggedInUser.name}</>:
    <>
    
    <div className="login__">
    <i className="fa-solid fa-cart-shopping"></i>
    <NavLink to="/login">login </NavLink>
    </div>
    </>
  }

    </form>

  </div>
</nav>
    
    </>
  )
}

export default Home
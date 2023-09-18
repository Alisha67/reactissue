import React, { Fragment } from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
    function handleClicked(e){
        e.preventDefault();
    }
  return (
 <Fragment>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home" style={({isActive})=>{return{ color: isActive ? 'orange':'black',
        border: isActive ? '1px solid orange':'black'}}}
         >Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about" style={({isActive})=>{return{ color: isActive ? 'orange':'black' , border: isActive ? '1px solid orange':'black'}}}  >About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog"  style={({isActive})=>{return{ color: isActive ? 'orange':'black'}}}>Blog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" style={({isActive})=>{return{ color: isActive ? 'orange':'black'}}}>Contact</NavLink>
      </li>
      {/* dynamic routing */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/user1" style={({isActive})=>{return{ color: isActive ? 'orange':'black'}}}>User</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/user2" style={({isActive})=>{return{ color: isActive ? 'orange':'black'}}}>User2</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={handleClicked} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


    </Fragment>
  )
}

export default Navbar
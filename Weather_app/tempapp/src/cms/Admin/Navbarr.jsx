import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import authSvc from '../../Components/Auth/auth.service';
import { Exception } from 'sass';

const Navbarr = () => {
const navigate =useNavigate();
const toggleSidebar=(e)=>{
    e.preventDefault();
    document.body.classList.toggle('sb-sidebar-toggled');
}


// const handleLogOut= async (e)=>{
//     try{
//     e.preventDefault();
//     let response = await authSvc.logOutUser();
//      console.log(response)
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('user');

  
//     navigate('/login')
//         }catch(Exception){
//             console.log(Exception);
//         }
//     }


  return (
    <div>

<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
           
            <NavLink className="navbar-brand ps-3" to="/">logo/Admin Pannel</NavLink>
           
            <button onClick={toggleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
           
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            
            </div>
       
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Update Profile</a></li>
                
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!" >Logout</a></li>
                        {/* onClick={handleLogOut} */}
                    </ul>
                </li>
            </ul>
        </nav>


    </div>
  )
}

export default Navbarr
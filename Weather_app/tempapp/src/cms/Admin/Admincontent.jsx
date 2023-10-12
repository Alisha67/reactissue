import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Admincontent = () => {
    const loggedInUser = localStorage.getItem('user');
    const heading = {
        color: 'white'
    }

    return (
        <div>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <NavLink className="nav-link" to="/addmin">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </NavLink>
                                <div className="sb-sidenav-menu-heading" style={{ heading }}>Features</div>
                                <NavLink className="nav-link" to="/addmin/banner">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Banner Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/brand">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Brand Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/category">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Category Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/users">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Users Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/product">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Product Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/order">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    order Manager
                                </NavLink>
                                <NavLink className="nav-link" to="/addmin/transaction">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Transaction Manager
                                </NavLink>

                        
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                        {loggedInUser.name}
                        </div>
                    </nav>
                </div>


                
                <div id="layoutSidenav_content">
                    <main>
                      
                        <Outlet/>
                    </main>

                </div>
            </div>


        </div>
    )
}

export default Admincontent
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const heading={
        color:"white"
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
                            <div className="sb-sidenav-menu-heading" style={{heading}}>Features</div>
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
                            <NavLink className="nav-link" to="/addmin/user">
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
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            </div>

    </div>
  )
}

export default Sidebar
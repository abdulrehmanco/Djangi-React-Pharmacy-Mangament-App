import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
 
    return (
        <>
      <nav className="sidebar sidebar-offcanvas"  id="sidebar" >
          <ul className="nav">
            <li className="nav-item "  >
              <Link className="nav-link" to="/dash">
                <i className="mdi mdi-view-dashboard menu-icon"></i>
                <span className="menu-title" >Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to='/viewcomp'>
                <i className="menu-icon mdi mdi-alphabetical"></i>
                <span className="menu-title">Companies</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/createmed' >
                <i className="menu-icon mdi mdi-bulletin-board"></i>
                <span className="menu-title">Medicine</span>  
              </Link>  
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/cust' >
                <i className="menu-icon mdi mdi-account"></i>
                <span className="menu-title">Customer</span>   
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/emplo'>
                <i className="menu-icon mdi mdi-account"></i>
                <span className="menu-title">Employees</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/emp_sal'>
                <i className="menu-icon mdi mdi-account"></i>
                <span className="menu-title">Employee Salary</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/bill'>
                <i className="menu-icon mdi mdi-basket"></i>
                <span className="menu-title">Generate Bill </span>
              </Link>
            </li>         
          </ul>
        </nav>
        </>
    )
}

export default Sidebar

import {Link} from 'react-router-dom'


const Navbar = () => {
  <style
         

          
      />
  
    return (
      <>
      
      
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row" >
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
         
          <div>
            <Link className="navbar-brand brand-logo"  to="/">
              <span className='text' data-text="MARHABA" >
                MARHABA
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top" > 
          <ul className="navbar-nav">
            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">Welcome, <span className="text-black fw-bold">Abdul Rehman Rais</span></h1>
              <h3 className="welcome-sub-text">Your performance summary this week </h3>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            
            
            <li className="nav-item">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
                <input type="search" className="form-control" placeholder="Search Here" title="Search here"/>
              </form>
            </li>
           
            
            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <Link className="nav-link" id="UserDropdown" to="" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="img-xs rounded-circle" src="images/faces/face7.jpg" alt="Profile"/> </Link>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <img className="img-md rounded-circle" src="images/faces/face7.jpg" alt="Profile"/>
                  <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                  <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <Link className="dropdown-item" to='/logout'><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2" ></i> My Profile <span className="badge badge-pill badge-danger">1</span></Link>

                <Link className="dropdown-item" to='/logout'><i className="dropdown-item-icon mdi mdi-power text-primary me-2" ></i>Sign Out</Link>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      </>)
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="container">
    
    <a className="navbar-brand me-2" href="">
      <img
        src="http://atlas-content-cdn.pixelsquid.com/stock-images/chat-message-icon-computer-nraAl3D-600.jpg"
        height="86"
        alt="BulkSender"
        loading="lazy"
      />BulkSender
    </a>

    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/homepage">Home</NavLink>
        </li>
      </ul>
      

      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-link px-3 me-2" >
        <NavLink className="nav-link" to="/Loginpage">Login</NavLink>
          
        </button>
        <button type="button" className="btn btn-dark px-3 me-3" >
        <NavLink className="nav-link" to="/signup">
          
          Sign up for free</NavLink>
        </button>
        <a
          className="btn btn-dark px-3"
          href="https://github.com/"
          role="button"
          ><i className="fab fa-github"></i
        ></a>
      </div>
    </div>
    
  </div>
  
</nav>

  )
}

export default Header
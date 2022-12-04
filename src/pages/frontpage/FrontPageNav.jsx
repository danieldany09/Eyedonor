import React from 'react'
import { Link } from 'react-router-dom'

const FrontPageNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/register" style={{color:"black"}}>ADMIN <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"   style={{color:"black"}} href="/login">STAFF</a>
      </li></ul></div>
    
</nav>
    </div>
  )
}

export default FrontPageNav

import React from 'react'
import { Link } from 'react-router-dom'

const FrontPageNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/register" style={{color:"black"}}>ADMIN <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"   style={{color:"black"}} href="/login">STAFF</a>
      </li></ul></div>
    
</nav>
    </div>
  )
}

export default FrontPageNav

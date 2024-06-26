import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
 <>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand text-white fw-bold" to="">Movies World </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="Movie">Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="Regiester">Regiester</Link>
        </li>
    
         
       
      </ul>
     
    </div>
  </div>
</nav>





 </>
  )
}

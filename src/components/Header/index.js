import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <>
    <div className="container">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
   <Link to="/" className="tag text-primary navbar-brand"><u>B.</u></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
        </li>
        
        <li className="nav-item">
         <Link to='/about' className="nav-link active ml-2 text-white" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
         <Link to="/skills" className="nav-link active ml-5 text-white" aria-current="page" >Skills</Link>
        </li>
        <li className="nav-item">
         <Link to="/education" className="nav-link active ml-5 text-white" aria-current="page" >Education</Link>
        </li>
        <li className="nav-item">
         <Link to="/Project" className="nav-link active ml-5 text-white" aria-current="page" >Project</Link>
        </li>
        <li className="nav-item">
         <Link to="/resuma" className="nav-link active ml-5 text-white" aria-current="page" >Resuma</Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link to="/contact"><button class="btn btn-primary" type="submit">Contact Me</button></Link>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

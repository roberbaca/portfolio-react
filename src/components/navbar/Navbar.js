import React from 'react'
import { useState } from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    
    return (
        <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <div className='navBar-container'>
                <img className="logo" src={require('../../assets/rnbGamesCubeLogoinv2.png')} alt="logo" />
                <button className='navBar-btn' onClick={handleToggle}>{navbarOpen ? <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars"></i> }</button>
            </div>
            <ul className={`${navbarOpen ? " navigation-open" : "navigation-close"}`}>
                <Link to ="/"><li  onClick={handleToggle}>Home</li></Link>  
                <Link to ="/about"><li  onClick={handleToggle}>About</li></Link> 
                <Link to ="/projects"><li  onClick={handleToggle}>Proyects</li></Link>   
                <Link to ="/contact"><li  onClick={handleToggle}>Contact</li></Link>      
            </ul>
      </nav>
  ) 
}

export default Navbar
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
                <button className='navBar-btn' onClick={handleToggle}>{navbarOpen ? <img className="language-logo-spain" src={require('../../assets/spain.png')} alt="logo" /> :  <img className="language-logo-uk" src={require('../../assets/uk.png')} alt="logo" /> }</button>
                <button className='navBar-btn' onClick={handleToggle}>{navbarOpen ? <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars"></i> }</button>
            </div>
            <ul className={`${navbarOpen ? " navigation-open" : "navigation-close"}`}>
                <Link to ="/" className='list-item'><li onClick={handleToggle}>Home</li></Link>  
                <Link to ="/about" className='list-item'><li onClick={handleToggle}>About</li></Link> 
                <Link to ="/projects" className='list-item'><li onClick={handleToggle}>Projects</li></Link>   
                <Link to ="/projects" className='list-item'><li onClick={handleToggle}>Games</li></Link> 
                <Link to ="/contact" className='list-item'><li onClick={handleToggle}>Contact</li></Link>      
            </ul>
      </nav>
  ) 
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const { t } = useTranslation();

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
        if (navbarOpen) {
            document.body.classList.add("no-scroll");
        }
    } 

    return (
        <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <div className='navBar-container'>                          
                <LanguageSelector/>            
                <button className='navBar-btn' onClick={handleToggle}>{navbarOpen ? <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars"></i> }</button>
            </div>
            <ul className={`${navbarOpen ? " navigation-open" : "navigation-close"}`}>
                <Link to ="/" className='list-item'><li onClick={handleToggle}>{t('menu.home')}</li></Link>  
                <Link to ="/about" className='list-item'><li onClick={handleToggle}>{t('menu.about')}</li></Link> 
                <Link to ="/projects" className='list-item'><li onClick={handleToggle}>{t('menu.projects')}</li></Link>   
                <Link to ="/games" className='list-item'><li onClick={handleToggle}>{t('menu.games')}</li></Link> 
                <Link to ="/contact" className='list-item'><li onClick={handleToggle}>{t('menu.contact')}</li></Link>      
            </ul>
      </nav>
  ) 
}

export default Navbar
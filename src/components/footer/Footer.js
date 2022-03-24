import React from 'react';
import './Footer.css';
import { FaGithubSquare, FaLinkedin, FaItchIo } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {

    //const currentYear = new Date().getFullYear();
    //"https://www.linkedin.com/in/roberto-baca"

    return ( 
 
        <footer>
            <img className="logo" src={require('../../assets/rnbGamesCubeLogoinv2.png')} alt="logo" />
            <p className='copy'>Copyright &copy; 2022 by <span>Roberto Baca</span>. All Rights Reserved.</p>
            <div className='social-icon-container'>
                <p className='social-icon'><FaGithubSquare/></p>
                <p className='social-icon'><FaLinkedin/></p>         
                <p className='social-icon'><FaItchIo/></p> 
                <p className='social-icon'><AiFillMail/></p> 
            </div>
            
        </footer>
  

)};

export default Footer;

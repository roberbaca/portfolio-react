import React from 'react';
import './Footer.css';
import { FaGithubSquare, FaLinkedin, FaItchIo } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return ( 
 
        <footer>
            <img className="logo" src={require('../../assets/rnbGamesCubeLogoinv2.png')} alt="logo" />
            <p className='copy'>Copyright &copy; 2022 {t("footer.copyBy")}<span>Roberto Baca</span>. {t("footer.copy")}</p>
            <div className='social-icon-container'>
                <a className='social-icon' href="https://github.com/roberbaca" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
                <a className='social-icon' href="https://www.linkedin.com/in/roberto-baca" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a className='social-icon' href="https://rober-baca.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo/></a>
                <a className='social-icon' href="mailto:roberto.nicolas.baca@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail/></a>             
            </div>            
        </footer>
)};

export default Footer;

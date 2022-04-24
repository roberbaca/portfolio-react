import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

const About = () => {

  const { t } = useTranslation();

  return (
    <div className='about-section'>
      
      <div className='about-title-container'>
        <h2 className='about-title'>{t("about.title")}</h2>
      </div>
      
      <div className='about-container'>
        <div className='about-img-container'>
          <img className="portrait" src={require('../../assets/photo2.png')} alt="portrait" /> 
        </div>
               
        <div className='about-data'>
          <h3>Roberto Baca</h3>

          <p>{t("about.paragraph1a")}<span><Link to ="/" className='hyperlink'>Roberto Baca</Link></span>{t("about.paragraph1b")}<span><Link to ="/projects" className='hyperlink'>{t("about.paragraph1c")}</Link></span> 
          {t("about.paragraph1d")} <span><Link to ="/games" className='hyperlink'>{t("about.paragraph1e")}</Link></span>.</p>
          
          <p>{t("about.paragraph2")}</p> 
          <p>{t("about.paragraph3")}</p>  
          <p>{t("about.paragraph4")}</p>            
          <p>{t("about.paragraph5")}</p>
          <p>{t("about.paragraph6")}</p>
          <p>{t("about.paragraph7")}</p>
          <p>{t("about.paragraph8")}</p>      

          <div className="cv-container">
            <Link to ="/files/CVRobertoBaca.pdf" target="_blank" download className='btn-cv'><i className="fas fa-download"></i>{t("about.cv")}</Link>  
          </div>
        </div>
      
    </div>
  </div>
  )
};

export default About;
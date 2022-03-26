import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

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

          <p>{t("about.paragraph1a")}<span>Roberto Baca</span>{t("about.paragraph1b")}<span>{t("about.paragraph1c")}</span> 
          {t("about.paragraph1d")} <span>{t("about.paragraph1e")}</span>.</p>
          
          <p>{t("about.paragraph2")}</p> 
          <p>{t("about.paragraph3")}</p>  
          <p>{t("about.paragraph4")}</p>            
          <p>{t("about.paragraph5")}</p>
          <p>{t("about.paragraph6")}</p>
          <p>{t("about.paragraph7")}</p>
          <p>{t("about.paragraph8")}</p>      

          <div className="cv-container">
            <button className='btn-cv'><i className="fas fa-download"></i>{t("about.cv")}</button>
          </div>
        </div>
      
    </div>
  </div>
  )
};

export default About;

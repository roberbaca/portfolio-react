import React from 'react'
import { useTranslation } from 'react-i18next';
import TypeAnimation from 'react-type-animation';
import { Link } from "react-router-dom"
import TypeWriter from "../../components/Typewriter/Typewriter"
import './Home.css';  

const Home = () => {

  const { t } = useTranslation(); 
  const text = `< Full Stack Developer />`;
  const text2 = `< Videogames Developer />`;

  //https://github.com/jstejada/react-typist/tree/master/examples

  
  return (
    <div>
       <section className="intro">      
        <h1>{t('home.title')}<span>Roberto Baca</span></h1>
       
        <TypeWriter content={text} speed={100} />;
          {/* <div className='intro-text-container'>
              <TypeAnimation
                  cursor={true}
                  sequence={[' < Full Stack Developer />', 3000, '< VideoGames Developer />', 3000]}
                  wrapper="div"
                  repeat={Infinity}
                  className= "intro-text-anim"
              />

          </div> */}

       
        
        <div className='btn-container'>     
          <Link to ="/about" className='btn-about'><i className="fa-solid fa-circle-info"></i>{t('home.btn1')}</Link> 
          <Link to ="/contact" className='btn-contact'><i className="fa-solid fa-message"></i>{t('home.btn2')}</Link>  
        </div>
    </section>
    </div>
  )
}

export default Home
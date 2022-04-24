import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import './Home.css';  
import Typist from 'react-typist';
import {useState, useEffect} from 'react';


const Home = () => {

  const { t } = useTranslation(); 
  const words = ['< Full Stack Developer />', '< Videogames Developer />'];
  const [count, setCount] = useState(1);

  useEffect(() => {      
    setCount(1);
  }, [count]);

  return (
    <div>
       <section className="intro">      
        <h1>{t('home.title')}<span>Roberto Baca</span></h1> 
        <div className='intro-text-container'>
          {count ? (
            <Typist className='intro-text-anim' avgTypingDelay={100} cursor={{show: true, blink: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 1000,}} onTypingDone={() => setCount(0)}>
              <span>{words[0]}</span>
              <Typist.Backspace count={words[0].length} delay={800} />
              <span>{words[1]}</span>
              <Typist.Backspace count={words[1].length} delay={800} />
            </Typist>
            ) : (
              ""
            )}
        </div>                
        
        <div className='btn-container'>     
          <Link to ="/about" className='btn-about'><i className="fa-solid fa-circle-info"></i>{t('home.btn1')}</Link> 
          <Link to ="/contact" className='btn-contact'><i className="fa-solid fa-message"></i>{t('home.btn2')}</Link>  
        </div>
    </section>
    </div>
  )
}

export default Home
import React from 'react'
import { updateLang } from '../../languages';
import { useState } from 'react';
import './LanguageSelector.css';

const LanguageSelector = () => {

    const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

    const onChangeLang = () => {   
        let newLang = lang;

        if (lang == "es") {
          newLang = "en"
        } else {
          newLang = "es"
        }
        
        setLang(newLang);
        updateLang(newLang);
          
    }

  return (
    <div>
        <button className='btn-lang' onClick={onChangeLang}>{lang==='es' ? <img className="language-logo-spain" src={require('../../assets/spain.png')} alt="logo" /> :  <img className="language-logo-uk" src={require('../../assets/uk.png')} alt="logo" /> }</button>
    </div>
  )
}

export default LanguageSelector
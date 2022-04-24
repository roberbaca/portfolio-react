  import React from 'react';
  import './Contact.css';
  import { useTranslation } from 'react-i18next';

  const Contact = () => {

    const { t } = useTranslation();

    return (

      <section className = "contact" id = "contact">    
          <h2 className='contact-title'>{t("contact.title")}</h2>        
          <div className="contact-container">             
              <form action="https://formspree.io/f/mdoyyjgo" method ="POST" className = "contact-form" id="my-form">
                  <h3 className='contact-subtitle'>{t("contact.subtitle")}</h3>
                  <div className='contact-icon'>
                    <i className="fa-solid fa-envelope"></i>
                    <p className='contact-data'>roberto.nicolas.baca@gmail.com</p>
                  </div>
                  <div className = "contact-inputContainer">
                      <input className = "contact-inputBox" type="text" placeholder={t("contact.placeholderName")} name="first_name" autoComplete="on" required/>
                      <input className = "contact-inputBox" type="email" placeholder={t("contact.placeholderMail")} name="email" autoComplete="on" required/>
                  </div>              
                  <textarea className = "contact-msg" name="message" id="" cols="30" rows="10" placeholder={t("contact.placeholderMsg")}></textarea>                
                  <button className = "contact-btn" type="submit" value="submit" name="submit" id="my-form-button"><i className="fab fa-telegram-plane"></i>{t("contact.send")}</button>
                  <p className = "contact-mailStatus" id="my-form-status"></p>
              </form>         
          </div>
      </section>  
    )
  };

  export default Contact;

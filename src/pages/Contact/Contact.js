  import React from 'react';
  import './Contact.css';

  const Contact = () => {
    return (

      <section className = "contact" id = "contact">    
          <h2 className='contact-title'>Contact</h2>        
          <div className="contact-container">             
              <form action="https://formspree.io/f/mdoyyjgo" method ="POST" className = "contact-form" id="my-form">
                  <h3 className='contact-subtitle'>Drop me a message</h3>
                  <div className='contact-icon'>
                    <i className="fa-solid fa-envelope"></i>
                    <p className='contact-data'>roberto.nicolas.baca@gmail.com</p>
                  </div>
                  <div className = "contact-inputContainer">
                      <input className = "contact-inputBox" type="text" placeholder="Your name" name="first_name" autoComplete="on" required/>
                      <input className = "contact-inputBox" type="email" placeholder="Your email" name="email" autoComplete="on" required/>
                  </div>              
                  <textarea className = "contact-msg" name="message" id="" cols="30" rows="10" placeholder="Your message"></textarea>                
                  <button className = "contact-btn" type="submit" value="submit" name="submit" id="my-form-button"><i className="fab fa-telegram-plane"></i>Send Message</button>
                  <p className = "contact-mailStatus" id="my-form-status"></p>
              </form>         
          </div>
      </section>  
    )
  };

  export default Contact;

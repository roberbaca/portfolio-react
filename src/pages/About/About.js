import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className='about-section'>
      
      <div className='about-title-container'>
        <h2 className='about-title'>About me</h2>
      </div>
      
      <div className='about-container'>
        <div className='about-img-container'>
          <img className="portrait" src={require('../../assets/photo2.png')} alt="portrait" /> 
        </div>
               
        <div className='about-data'>
          <h3>Roberto Baca</h3>

          <p>
            Hi! My name is <span>Roberto Baca</span>, I´m really passionate about <span>web development</span> 
            and <span>videogames development</span>.
          </p>
          
          <p>
            I am a geek. I love computers and everything about them !
          </p> 
          <p>   
            I love coding and learning new coding practices and methods. When I am not programming, 
            I`m thinking about programming ! It’s very easy to become complacent when you have a certain set of skills that you refine over 
            years but for me, there is nothing that compares to the feeling when you learn a new skill. 
          </p>  
          <p>   
            I truly get excited when a technology is released or when a new web application that does something 
            never done before becomes available. 
            I am deeply impressed when I see smart and beautiful code that does something I know is hard to accomplish.
          </p>        
    
          <p>
            In my spare time, I make videogames ! I play around with different engines, trying out new ideas or game mechanics.
          </p>

          <p> 
            As you can see, this website is my personal portfolio webpage, which I created while learning 
            Web Development.
          </p>
          
          <p>I have been working in different personal projects which you can find here.</p>

          <p>Thanks for visiting my website!</p>
        

          <div className="cv-container">
            <button className='btn-cv'><i className="fas fa-download"></i>My CV</button>
          </div>
        </div>
      
    </div>
  </div>
  )
};

export default About;

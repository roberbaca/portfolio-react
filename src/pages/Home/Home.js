import React from 'react'
import TypeAnimation from 'react-type-animation';
import './Home.css';

const Home = () => {
  return (
    <div>
       <section className="intro">
        <h1>Hi! I am  <span>Roberto Baca</span> </h1>
        <div className='intro-text-container'>
            <TypeAnimation
                cursor={true}
                sequence={[' < Full Stack Developer />', 1000, '< VideoGames Developer />', 1000]}
                wrapper="h2"
                repeat={Infinity}
                className= "intro-text-anim"
            />

        </div>
        <div className='btn-container'>
          <button className='btn-about'><i className="fa-solid fa-circle-info"></i>About</button>
          <button className='btn-contact'><i className="fa-solid fa-message"></i>Contact</button>
        </div>
    </section>
    </div>
  )
}

export default Home
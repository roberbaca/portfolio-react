import React from 'react';
import './Projects.css';
import { FaGithubSquare, FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiJavascript,SiMongodb, SiExpress, SiRedux } from "react-icons/si";

const Projects = () => {
  return (

    <section className = "projects">    
        <h2 className='projects-title'>Projects</h2>        
        {/* <div className="projects-container">             
          <h3 className='contact-subtitle'>Let see what I did</h3>                     
        </div> */}

        <div className = "projects-cards-container">

        <div className='card'>
            <div className='card-img-container'>
              <img className="card-img" src={require('../../assets/card2.png')} alt="card-img" /> 
            </div>
            <div className='card-info'>
              <div className='card-data'>
                <p className='card-title'>Game Over</p>
                <p className='card-description'>It`s an E-commerce website coded with MERN (MongoDB, React, Express and Node) </p>
                <div className='card-icon-container'>
                  <p className='icon-react'><FaReact/></p>
                  <p className='icon-redux'><SiRedux/></p>
                  <p className='icon-mongo'><SiMongodb/></p>
                  <p className='icon-express'><SiExpress/></p>
                  <p className='icon-node'><FaNode/></p>

                </div>
              </div>
              <div className='card-btn-container'> 
                <button className='card-btn'><i className="fa-solid fa-globe"></i>live</button> 
                {/* https://gameover-store.firebaseapp.com/ */}
                <button className='card-btn'><i className="fa-brands fa-github"></i>git</button>
                {/* https://github.com/roberbaca/Game-Over-E-commerce */}
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card-img-container'>
              <img className="card-img" src={require('../../assets/card3.png')} alt="card-img" /> 
            </div>
            <div className='card-info'>
              <div className='card-data'>
                <p className='card-title'>Fresh Market</p>
                <p className='card-description'>This project is an online store that sells organic products like veggies and fruits. It’s a simple e-commerce website made with JavaScript Vanilla.</p>
                <div className='card-icon-container'>
                  <p className='icon-html'><FaHtml5/></p>
                  <p className='icon-css'><SiCss3/></p>
                  <p className='icon-js'><SiJavascript/></p>
                </div>
              </div>
              <div className='card-btn-container'> 
                <button className='card-btn'><i className="fa-solid fa-globe"></i>live</button> 
                {/* https://todolistjs.vercel.app/ */}
                <button className='card-btn'><i className="fa-brands fa-github"></i>git</button>
                {/* https://github.com/roberbaca/ToDoList */}
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card-img-container'>
              <img className="card-img" src={require('../../assets/card1.png')} alt="card-img" /> 
            </div>
            <div className='card-info'>
              <div className='card-data'>
                <p className='card-title'>ToDo List</p>
                <p className='card-description'>A simple list app built in JavaScript Vanilla. This app allows a user to add new tasks, mark a task as completed and delete old ones. It uses local storage so we can store the ToDo List locally within the user's browser.</p>
                <div className='card-icon-container'>
                  <p className='icon-html'><FaHtml5/></p>
                  <p className='icon-css'><SiCss3/></p>
                  <p className='icon-js'><SiJavascript/></p>
                </div>
              </div>
              <div className='card-btn-container'> 
                <button className='card-btn'><i className="fa-solid fa-globe"></i>live</button> 
                {/* https://todolistjs.vercel.app/ */}
                <button className='card-btn'><i className="fa-brands fa-github"></i>git</button>
                {/* https://github.com/roberbaca/ToDoList */}
              </div>
            </div>
          </div>

        </div>
    </section>  
  )
};

export default Projects;

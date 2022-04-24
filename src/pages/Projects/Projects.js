import React from 'react';
import './Projects.css';
import { FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiJavascript,SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import { useTranslation } from 'react-i18next';

const Projects = () => {

  const { t } = useTranslation();

  return (

    <section className = "projects">    
        <h2 className='projects-title'>{t("projects.title")}</h2>       
  

        <div className = "projects-cards-container">

        
        <div className='card'>
            {window.screen.width > 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/gameOverCard480x800.png')} alt="card-img" /></div>}
            <div className='card-info'>
              <div className='card-data'>
                <div className='card-header'>
                  <p className='card-title'>Game Over</p>
                  <div className='card-icon-container'>
                    <p className='icon-react'><FaReact/></p>
                    <p className='icon-redux'><SiRedux/></p>
                    <p className='icon-mongo'><SiMongodb/></p>
                    <p className='icon-express'><SiExpress/></p>
                    <p className='icon-node'><FaNode/></p>
                  </div>
                </div>
                <p className='card-description'>{t("projects.gameOver.mainDescription")}</p>
                <p className='card-description'>{t("projects.gameOver.description1")}</p>
                <p className='card-description'>{t("projects.gameOver.description2")}</p>
                <p className='card-description'>{t("projects.gameOver.description3")}</p>
                <p className='card-description'>{t("projects.gameOver.description4")}</p>
                <p className='card-description'>{t("projects.gameOver.description5")}</p>
                <p className='card-description'>{t("projects.gameOver.description6")}</p>
                <p className='card-description'>{t("projects.gameOver.description7")}</p>
                <p className='card-description'>{t("projects.gameOver.description8")}</p>
              </div>
              {window.screen.width <= 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/gameOverCard800x480.png')} alt="card-img" /></div>}


              <div className='card-btn-container'> 
                <a className='card-btn' href="https://gameover-store.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i>live</a>       
                <a className='card-btn' href="https://github.com/roberbaca/Game-Over-E-commerce" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>git</a>          
              </div>
            </div>
          </div>
           

          <div className='card'>
            {window.screen.width > 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/freshMarketCard480x800.png')} alt="card-img" /></div>}
            <div className='card-info'>
              <div className='card-data'>
                <div className='card-header'>
                  <p className='card-title'>Fresh Market</p>
                  <div className='card-icon-container'>
                    <p className='icon-html'><FaHtml5/></p>
                    <p className='icon-css'><SiCss3/></p>
                    <p className='icon-js'><SiJavascript/></p>
                  </div>
                </div>               
                <p className='card-description'>{t("projects.freshMarket.mainDescription")}</p>      
                <p className='card-description'>{t("projects.freshMarket.description1")}</p>       
                <p className='card-description'>{t("projects.freshMarket.description2")}</p>       
                <p className='card-description'>{t("projects.freshMarket.description3")}</p>               
              </div>
              {window.screen.width <= 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/freshMarketCard800x480.png')} alt="card-img" /></div>}
              <div className='card-btn-container'> 
                <a className='card-btn' href="https://freshmarket.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i>live</a>       
                <a className='card-btn' href="https://github.com/roberbaca/ECommerceJS" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>git</a>               
              </div>
            </div>
          </div>

          <div className='card'>
            {window.screen.width > 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/todoListCard480x800.png')} alt="card-img" /></div>}            <div className='card-info'>
              <div className='card-data'>
                <div className='card-header'>
                  <p className='card-title'>ToDo List</p>
                  <div className='card-icon-container'>
                    <p className='icon-html'><FaHtml5/></p>
                    <p className='icon-css'><SiCss3/></p>
                    <p className='icon-js'><SiJavascript/></p>
                  </div>            
                </div>
                <p className='card-description'>{t("projects.toDo.mainDescription")}</p>
                <p className='card-description'>{t("projects.toDo.description1")}</p>
                <p className='card-description'>{t("projects.toDo.description2")}</p>
                <p className='card-description'>{t("projects.toDo.description3")}</p>    
                {window.screen.width <= 768 && <div className='card-img-container'><img className="card-img" src={require('../../assets/todoListCard800x480.png')} alt="card-img" /></div>}         
              </div>
              <div className='card-btn-container'> 
                <a className='card-btn' href="https://todolistjs.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i>live</a>       
                <a className='card-btn' href="https://github.com/roberbaca/ToDoList" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>git</a>                
              </div>
            </div>
          </div>        
        </div>
    </section>  
  )
};

export default Projects;

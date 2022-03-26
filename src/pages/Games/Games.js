import React from 'react';
import './Games.css';
import { FaUnity } from "react-icons/fa";
import { SiCocos, SiTypescript, SiCsharp, SiConstruct3 } from "react-icons/si";
import { useTranslation } from 'react-i18next';

const Games = () => {

  const { t } = useTranslation();

  return (

    <section className = "videogames-section">    
        <h2 className='videogames-title'>{t("games.title")}</h2>       
  

        <div className = "videogames-cards-container">

        <div className='videogames'>
            <div className='videogames-img-container'>
              <img className="videogames-img" src={require('../../assets/game0.png')} alt="card-img" /> 
            </div>
            <div className='videogames-info'>
              <div className='videogames-data'>
                <div className='videogames-header'>
                  <p className='videogames-name'>Running Kid</p>
                  <div className='videogames-icon-container'>
                    <p className='icon-unity'><FaUnity/></p>    
                    <p className='icon-unity'><SiCsharp/></p>                
                  </div>
                </div>

                <p className='videogames-description'>{t("games.runningKid.mainDescription")}</p>
                <p className='videogames-description'>{t("games.runningKid.description1")}</p>
                <p className='videogames-description'>{t("games.runningKid.description2")}</p>
                

              </div>
              <div className='videogames-btn-container'> 
                <a className='videogames-btn' href="https://rober-baca.itch.io/running-kid" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-gamepad"></i>Play !</a>       
                <a className='videogames-btn' href="https://github.com/roberbaca/RunningKid" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>git</a>          
              </div>
            </div>
          </div>

          <div className='videogames'>
            <div className='videogames-img-container'>
              <img className="videogames-img" src={require('../../assets/game2.png')} alt="card-img" /> 
            </div>
            <div className='videogames-info'>
              <div className='videogames-data'>
                <div className='videogames-header'>
                  <p className='videogames-name'>e-bot</p>
                  <div className='videogames-icon-container'>
                    <p className='icon-cocos'><SiCocos/></p>
                    <p className='icon-cocos'><SiTypescript/></p>                    
                  </div>
                </div>               
                <p className='videogames-description'>{t("games.eBot.mainDescription")}</p>      
                <p className='videogames-description'>{t("games.eBot.description1")}</p>       
                <p className='videogames-description'>{t("games.eBot.description2")}</p>                       

              </div>
              <div className='videogames-btn-container'> 
                <a className='videogames-btn' href="https://rober-baca.itch.io/e-bots" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-gamepad"></i>Play !</a>     
                <a className='videogames-btn' href="https://github.com/roberbaca/eBot" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>git</a>               
              </div>
            </div>
          </div>

          <div className='videogames'>
            <div className='videogames-img-container'>
              <img className="videogames-img" src={require('../../assets/game3.png')} alt="card-img" /> 
            </div>
            <div className='videogames-info'>
              <div className='videogames-data'>
                <div className='videogames-header'>
                  <p className='videogames-name'>Zack Odyssey</p>
                  <div className='videogames-icon-container'>
                    <p className='icon-construct'><SiConstruct3/></p>                
                  </div>            
                </div>
                <p className='videogames-description'>{t("games.zackOdyssey.mainDescription")}</p>
                <p className='videogames-description'>{t("games.zackOdyssey.description1")}</p>                            
              </div>
              <div className='videogames-btn-container'> 
                <a className='videogames-btn' href="https://rober-baca.itch.io/zack-odyssey" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-gamepad"></i>Play !</a>                       
              </div>
            </div>
          </div>

        </div>
    </section>  
  )
};

export default Games;

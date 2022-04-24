import React from 'react'
import {useState, useEffect} from 'react';

  /*
  *A typewriter coomponent that will write
  *what ever content is passed to it in a way
  *a typewriter would be writing. The speed of the 
  *animation could be altered by the speed variable.
  *@param {String} content - the string to be typed, default is empty
  *@speed {Number} speed - typing speed in mili secs, default is 1000ms
  *@return {Jsx} returns a jsx 
  */


  const TypeWriter = ({ content = "", speed = 1000 }) => {
    const [displayedContent, setDisplayedContent] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      /*Create a new setInterval and store its id*/
      const animKey = setInterval(() => {
        setIndex((index) => {
          /*This setState function will set the index
          to index+1 if there is more content otherwise
          it will destory this animation*/
        
          if (index >= content.length - 1) {
            clearInterval(animKey);
            return index;
          }
          return index + 1;
        });
      }, speed);
    }, []);
  
    useEffect(() => {
      setDisplayedContent((displayedContent) => displayedContent + content[index]) 
    }, [index])
  
    return <pre className="type-writer">{displayedContent}</pre>;
  }; 

  
  export default TypeWriter;
import React from 'react';
import './componentsCSS.css';
import profilePic from '../images/wolverine.jpg';

const AboutMe = () =>{

  return(
    <div className='about-me-container' id='about-me'>
      <h2>About Me</h2>
      <img src={profilePic} alt='Profile'/>
      <p>I'm the best there is at what I do but what I do best isn't very nice. Sometimes, when you cage the beast, the beast gets angry. Nature Made Me A Freak. Man Made Me A Weapon. And God Made It Last Too Long. The Pain Lets You Know You’re Still Alive. It will heal. They always heal. And quickly.</p>
    </div>
  )

}


export default AboutMe;
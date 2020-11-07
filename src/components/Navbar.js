import React from 'react';
import './componentsCSS.css';

const Navbar = () =>{

  return(
    <div className='navbar-main-container'>
      <a className='navbar-item' href='#about-me'>About Me</a>
      <a className='navbar-item' href='#portfolio'>Portfolio</a>
      <a className='navbar-item' href='#resume'>Resume</a>
      <a href='#contact'>Contact</a>
    </div>
  )

}


export default Navbar;
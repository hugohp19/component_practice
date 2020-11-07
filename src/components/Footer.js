import React from 'react';
import SocialLinks from './SocialLinks';
import './componentsCSS.css';

const Footer = () =>{

  return(
    <div className='footer-container'>
      <SocialLinks />
      <p>© James Howlett 2020</p>
    </div>
  )

}


export default Footer;
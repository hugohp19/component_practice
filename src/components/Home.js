import React from 'react';
import './componentsCSS.css';
import homevideo from '../videos/homevideo.mp4';

const Home = () =>{

  return(
    <div className='home'>
      <video className='videoTag' autoPlay loop muted>
          <source src={homevideo} type='video/mp4' />
      </video>
      <div>
        <h1>Welcome to my Portfolio Site!</h1>
        <p>This is where the magic happens.</p>
      </div>
    </div>
  )

}


export default Home;
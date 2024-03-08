import React from 'react';
import './hero.css';

import data from '../../assets/data_capturing.jpeg';
// import connected from '../../assets/connected.svg';

const Hero = () => {
  return (
    <div className='hero row'>
      <div className="hero_left column">
      <div className="hero_title">
          <h1>Improving Data capturing</h1>
          
        </div>
        <div className="hero_text column"> 
        <p>We provide an enhanced data capturing for National Identity Database Management System Integrity with Deep Learning</p>
        <button className='button get_started'>Try Demo</button>
        </div>
      </div>
  
        <div className="column hero_right">
      <img src={data} alt="data_capturing" className='data_capturing ' />

       
      </div>


    </div>
  )
}

export default Hero;
import React from 'react';
import './hero.css';

import data from '../../assets/data_capturing.jpeg';
// import connected from '../../assets/connected.svg';

const Hero = () => {
  return (
    <div className='hero row'>
      <div className="hero_left column">
      <div className="hero_title">
          <h1>Bringing Integrity to National Identity Database Management System</h1>
          
        </div>
        <div className="hero_text column"> 
        <p>We provide an Artificial Intelligence Based Enhanced Data Capturing and Verification System To Support National Identity Database Integrity</p>
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
import React from 'react';

import HeroImg from '../assets/Hero.webp';

const Hero = () => {
  return (
    <div className='main'>
      <div className="hero-card">
        <div className="hero-image">
          <img src={HeroImg} alt="Hero Image" />
        </div>
        <div className="hero-content">
          <h2 className="hero-title">The TODO App</h2>
          <p className='hero-text'>Keep record of your everyday task here</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
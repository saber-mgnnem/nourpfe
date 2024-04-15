import React from 'react'
import video from '../assets/vid.mp4'
import './style/herosection.css'
const HeroSection = () => {
  return (
    <>
          <div className="containerherosection">
      <div className="video-overlay" />
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="centered-text">
        <h1>Transform stats into stunning graphs! Welcome to our graph creator</h1>
      </div>
    </div>
    </>
  )
}

export default HeroSection
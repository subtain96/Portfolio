import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I’m Muhammad Subtain,</span> frontend developer based in pakistan</h1>
        <p>I am a frontend developer from Lahore, Pakistan with 6 months experience in company like VExpo.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">My resume</div>
            </div>
    
      
    </div>
  )
}

export default Hero

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I’m Muhammad Subtain,</span> frontend developer based in pakistan</h1>
        <p>I am a frontend developer from Lahore, Pakistan with 6 months experience in company like VExpo.</p>
            <div className="hero-action">
                <div className="hero-connect">
                  <AnchorLink className='anchor-link' offset={50} href='#Contact'>
                   Connect with me
                  </AnchorLink>
                   
                </div>
                <div className="hero-resume">My resume</div>
            </div>
    
      
    </div>
  )
}

export default Hero

import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src={profile_image} alt="" />

            </div>
            <div className="about-right">
                
            </div>
        </div>
      
    </div>
  )
}

export default About

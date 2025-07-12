import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> 
                    <p>awaisiofficial0096@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+923173547196</p>

                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Lahore, Pakistan</p>

                </div>
            </div>
        </div>
        <form className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label>Your Email</label>
            <input type="text" placeholder='Enter your email' name='email' />
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">
                Submit Now
            </button>
        </form>

      </div>
    </div>
  )
}

export default Contact

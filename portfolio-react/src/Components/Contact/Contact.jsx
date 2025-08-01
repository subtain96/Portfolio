import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: '',
    isSuccess: false
  });

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setModalContent({
          title: 'Success!',
          message: 'Thank you for your message! I\'ll get back to you soon.',
          isSuccess: true
        });
        setShowModal(true);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setModalContent({
          title: 'Error',
          message: 'There was an error submitting the form. Please try again.',
          isSuccess: false
        });
        setShowModal(true);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong");
      setModalContent({
        title: 'Error',
        message: 'There was a network error. Please check your connection and try again.',
        isSuccess: false
      });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='Contact' className='contact'>
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className={`modal-icon ${modalContent.isSuccess ? 'success' : 'error'}`}>
              {modalContent.isSuccess ? (
                <FaCheckCircle size={50} />
              ) : (
                <FaTimesCircle size={50} />
              )}
            </div>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.message}</p>
            <button onClick={closeModal} className="modal-close-btn">
              OK
            </button>
          </div>
        </div>
      )}

      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
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
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">
            Submit Now
          </button>
          <span className="result-message">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import './Contact.css'; 
// import { TextField, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted!');
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      // Add form submission logic here (e.g., sending data to server)
    };
  
    return (
      <div className="contact-container">
        <header className="header">
          <h1 className="main-heading">
            How can we help?{' '}
            <span role="img" aria-label="angel">
              😇
            </span>
          </h1>
        </header>
        <main className="main-content">
          <div className="contact-section">
            <h2 className="section-heading">Message Us</h2>
            <form className="message-form" onSubmit={handleSubmit}>
              <div className="custom-input">
                <label>Name*</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="custom-input">
                <label>Email*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="custom-input">
                <label>Message*</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                ></textarea>
              </div>
              <button className="send-button" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="get-in-touch-section">
            <h2 className="section-heading">Get in touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <MailIcon className="icon" />
                <div className="textWrapperContact">
                <h3>Email</h3>
                <span>hello@threadhive.com</span>
                </div>
                
              </div>
              <div className="contact-item">
                <PhoneIcon className="icon" />
                <div className="textWrapperContact">
                <h3>Call or Text</h3>
                <span>(239) 429-1190</span>
                </div>
                
              </div>
              <div className="contact-item">
                <InstagramIcon className="icon" />
                <div className="textWrapperContact">
                <h3>Social</h3>
                <span>@threadhive</span>
                </div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  

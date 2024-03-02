import React, { useState } from 'react';
import '../form.css'
export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function resetStates() {
    setSubmitted(false);
    setError('');
  }
  
  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    resetStates();

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Change your endpoint from ./config.js file
    fetch('https://formcarry.com/s/JlqqpaYbQyq', {
      method: 'POST',
      headers: { 
        "Accept": "application/json"
      },
      body: formData
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setSubmitted(true);
        resetForm();
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }

  const showNotification = submitted || error;

  function renderStatus () {
    let message = error ? error : `Thanks for reaching out!, we'll get back to you soon.`;
    let icon = error ? 'error' : 'success';

    return (
      <div className="formcarry-block">
        <div className={`formcarry-message-block fc-${icon} active`}>
          <div className="fc-message-icon"></div>
          <div className="fc-message-content">{message}</div>
          <div className="fc-message-close" onClick={() => resetStates()}></div>
        </div>
      </div>
    )
  }

  return (
    <div className=' relative max-w-6xl mx-auto border border-teal-500'>
      <p className='absolute text-[40px] text-teal-500 font-bold'>Contact Us</p>
      <div className="formcarry-container ">
      
      <form onSubmit={(e) => onSubmit(e)}>
      
        <div className="formcarry-block">
          <label htmlFor="name">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
        </div>
        
        <div className="formcarry-block">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
        </div>
        
        <div className="formcarry-block">
          <label htmlFor="message">Your message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
        </div>
        
        <div className="formcarry-block mb-5">  
          <button type="submit">Send</button>
        </div>

        {showNotification && renderStatus()}
      
      </form>
    </div>
    </div>
  )
}
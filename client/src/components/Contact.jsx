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
    <div className='  max-w-6xl mx-auto border border-teal-600 mb-2'>
      <p className='text-center text-[40px] text-teal-500 font-bold mt-2'>Contact Us</p>
      <div className='flex flex-col mx-auto justify-around gap-4 sm:flex-row '>
        <div className=" w-auto sm:w-[400px]">
        
          <form className='flex flex-col gap-4' onSubmit={(e) => onSubmit(e)}>
          
            <div className="flex flex-col gap-3 ">
              <label  htmlFor="name">Full Name</label>
              <input className='max-w-[450px] rounded-md border-teal-500 border-y-2 text-black hover:bg-gray-200 transition' type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Your Email Address</label>
              <input className='max-w-[450px] rounded-md border-teal-500 border-y-2 text-black hover:bg-gray-200 transition' type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Your message</label>
              <textarea className='max-w-[450px] h-[185px] rounded-md border-teal-500 border-y-2 text-black hover:bg-gray-200 transition ' value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
            </div>
            
            <button className='text-white max-w-[450px] text-center bg-[#0154E5] p-2 rounded-md mb-5  hover:bg-teal-600 transition' type="submit">Send</button>


            {showNotification && renderStatus()}
          
          </form>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 '>
          <img className='w-[300px]' src='https://res.cloudinary.com/dwrbxnw11/image/upload/v1709408539/undraw_profile_data_re_v81r_ylfpum.svg'></img>
          <a className='text-[#0694A2]' href='mailto:help.apna.malwa@gmail.com'>help.apna.malwa@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
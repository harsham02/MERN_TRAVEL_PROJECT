import React, { useState } from 'react'
import axios from 'axios'
import toaster, { Toaster } from 'react-hot-toast'
import './ContactForm.css'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

   const handleSendMessage = async (e) => {
     e.preventDefault();
     await axios.post("https://mern-event-project.onrender.com/message/send",
      {
        name,
        email,
        subject,
        message,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
     )
     .then((res) => {
      console.log(res.data.message);
      toaster.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    })
    .catch((error) => {
      console.log(error.response.data.message);
      toaster.error(error.response.data.message);
    });
   };

  return (
    <div className='contact-container'>
    
        <div className='form-container'>
        <Toaster /> 
            <h1>Send a message to us!</h1>
             <form onSubmit={handleSendMessage}>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Subject' value={subject}   onChange={(e) => setSubject(e.target.value)}/>
                <textarea placeholder='Message' 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                 <button type='submit'>Send Message</button>
             </form>
        </div>
        <div className='contact-details'>
        <h1>Contact Details</h1>
          <ul>
    <li><strong>Name:</strong> Harshavardhana M</li>
    <li><strong>Phone:</strong> +91 8197814691</li>
    <li><strong>Email:</strong> harshavardhan15015@gmail.com</li>
    <li><strong>Location:</strong> Singasandra, Bengaluru</li>
  </ul>
        </div>
    </div>
  )
}

export default ContactForm

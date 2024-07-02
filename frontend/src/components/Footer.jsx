import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='heading'>
        <h1 className='logo'>Charana</h1>
        <p> Journey into the Heart of Adventure</p>
       </div>
       <div className="social-icons">
    <h3>Connect with Us</h3>
    <a href="https://www.linkedin.com/in/harshavardhana-m-88b9361a0" target="_blank">
        <i className="fab fa-linkedin linkedin-icon"></i>
    </a>
    <a href="https://www.instagram.com/harsha__m_" target="_blank">
        <i className="fa-brands fa-instagram-square instagram-icon"></i>
    </a>
    <a href="https://github.com/harsham02" target="_blank">
        <i className="fab fa-github-square github-icon"></i>
    </a>
    <a href="https://wa.me/8197814691" target="_blank">
        <i className="fa-brands fa-whatsapp-square whatsapp-icon"></i>
    </a>
</div>
      <p className='copyright'> &copy; 2024 Charana. All rights reserved.</p>   
    </div>
  )
}

export default Footer

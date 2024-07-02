import React from 'react'
import Navbar from '../components/NavBar'
import contactImg from '../assets/contact.jpg'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div>
       <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        text=""
        url="/"
        btnText="Travel Plan"
        btnClass="hide"
      />
        <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact

import React from 'react'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import aboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="About"
        text=""
        url="/"
        btnText="Travel Plan"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About

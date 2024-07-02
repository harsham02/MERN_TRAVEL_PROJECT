import React from 'react'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import serviceImg from '../assets/service.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
import Trek from '../components/Trek'
const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Service"
        text=""
        url="/"
        btnText="Travel Plan"
        btnClass="hide"
      />
      <Trip />
      <Trek />
      <Footer />
    </div>
  )
}

export default Service

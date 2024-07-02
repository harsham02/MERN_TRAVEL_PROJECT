import React from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53"
        title="Your Journey Your Story"
        text="Choose Your Favourite Trek Point"
        url="/service"
        btnText="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

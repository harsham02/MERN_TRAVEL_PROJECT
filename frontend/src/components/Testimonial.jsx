import React from 'react';
import './Testimonial.css';
import TestimonialData from './TestimonialData';
import t1 from "../assets/testominal/1.jpg";
import t2 from "../assets/testominal/2.jpg";
import t3 from "../assets/testominal/3.jpg";
import t4 from "../assets/testominal/4.png";
import t5 from "../assets/testominal/5.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    id: 1,
    text: "The Kumara Parvatha trek was challenging yet incredibly rewarding. The views from the top were breathtaking. The team's support and organization made the trek safe and enjoyable. A must-do for adventure enthusiasts!",
    image: t1,
    name: "Arjun V",
    who: "Our Thrill Seeker"
  },
  {
    id: 2,
    text: "Gokarna's beaches are simply mesmerizing. The serene atmosphere and pristine waters made it a perfect getaway. The trip was well-planned, ensuring we experienced the best of what Gokarna has to offer.",
    image: t2,
    name: "Meera S",
    who: "Beach Lover"
  },
  {
    id: 3,
    text: "Goa was an absolute blast! From the vibrant nightlife to the beautiful beaches, every moment was filled with excitement. The organizers did a fantastic job in curating an unforgettable experience.",
    image: t3,
    name: "Anita R",
    who: "Party Enthusiast"
  },
  {
    id: 4,
    text: "Exploring Munnar's tea plantations and scenic hills was a dream come true. The lush greenery and tranquil environment were incredibly rejuvenating. Kudos to the team for a well-coordinated trip.",
    image: t4,
    name: "Harsha",
    who: "Nature Lover"
  },
  {
    id: 5,
    text: "The 3-day Andhra package was perfectly organized, allowing us to experience the rich culture and heritage. The itinerary was well-balanced, and every destination was a delight. Highly recommend this package!",
    image: t5,
    name: "Nikhil T",
    who: "Culture Enthusiast"
  }
];

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 2100, min: 1024 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800},
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='testimonial-container'>
      <div className='heading'>
        <h1>Traveler Experiences</h1>
      </div>
      <Carousel responsive={responsive} 
    
       itemClass="carousel-item"
       className="testimonial-slider"
       arrows={true} 
       autoPlay={true}
       autoPlaySpeed={3000}
       infinite={true}>
         {testimonials.map((testimonial) => (
          <TestimonialData
            key={testimonial.id}
            text={testimonial.text}
            image={testimonial.image}
            name={testimonial.name}
            who={testimonial.who}
          />
        ))} 
        </Carousel>
    </div>
  );
};

export default Testimonial;

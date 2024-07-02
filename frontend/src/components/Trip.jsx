import React from 'react'
import './Trip.css'
import TripData from './TripData'
import gokarna from '../assets/pic1.jpg'
import goa from '../assets/goa.jpg'
import coorg from '../assets/coorg.jpg'
import munnar from '../assets/munnar.jpg'
const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Adventures</h1>
      <p>Discover our recent expeditions, each journey offering a blend of adventure, tranquility, and captivating sights.</p>
    <div className="tripcard">
      <TripData 
      image = {goa}
      heading="Goa, India"
      text = "Discover the vibrant beaches and rich Portuguese heritage of Goa. Our recent adventures in Goa showcase a blend of relaxation and lively nightlife. Whether you're exploring historic churches, indulging in watersports, or enjoying beach parties, Goa promises a memorable getaway filled with cultural immersion and scenic beauty." />

      <TripData 
      image = {gokarna}
      heading="Gokarna, Karnataka"
      text = "Escape to the tranquil shores of Gokarna on India's west coast. Our recent adventures in Gokarna highlight its pristine beaches and spiritual allure. Explore the serene beaches through adventurous beach trekking, visit ancient temples, and immerse yourself in yoga retreats. Gokarna offers a peaceful retreat amidst breathtaking coastal landscapes."
      />
      <TripData 
      image = {munnar}
      heading="Munnar, Kerala"
      text = "Discover the picturesque hill station of Munnar in Kerala. Our recent adventures in Munnar feature the breathtaking tea gardens and misty hills. Embark on a thrilling journey to Guna Cave, a popular spot for its historical significance and panoramic views. Enjoy tea tasting sessions, visit Eravikulam National Park to spot Nilgiri Tahr, and unwind amidst the tranquil beauty of Mattupetty Dam."
      />
      <TripData 
      image = {coorg}
      heading="Coorg, Karnataka"
      text = "Explore the lush landscapes and coffee plantations of Coorg in Karnataka. Our recent adventures in Coorg offer a blend of tranquility and outdoor activities. Experience the serene beauty of Abbey Falls, trek through the verdant hills, and indulge in authentic Kodava cuisine. Coorg is a perfect retreat for nature lovers and those seeking a peaceful getaway in the Western Ghats."
      />
    
        </div>
    </div>
  )
}

export default Trip

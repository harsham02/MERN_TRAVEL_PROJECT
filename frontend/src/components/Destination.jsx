import React from 'react'
import './Destination.css'
import Img1 from '../assets/mountain.jpg' 
import Img2 from '../assets/mountain1.jpg'
import Img3 from '../assets/mountain2.jpg'
import Img4 from '../assets/mountain3.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
    <DestinationData
    cName = "first-des"
    heading="Kumara Parvatha, Karnataka"
    data="Kumara Parvatha is one of the highest peaks in Karnataka, located in the Western Ghats. The trek offers breathtaking views of lush forests, diverse wildlife, and a challenging trail that attracts experienced trekkers. The climb is steep and rewarding, with the summit providing panoramic vistas of the surrounding landscape." 
    img1= {Img1}
    img2= {Img2} />
      <DestinationData
       cName = "first-des-reverse"
    heading="Meesapulimala, Kerala"
    data="Situated in the Idukki district of Kerala, Meesapulimala is the second highest peak in South India. The trek takes you through the tea estates of Munnar, dense shola forests, and rolling grasslands. The peak offers stunning views of the surrounding valleys and mountains, making it a favorite among nature enthusiasts." 
    img1= {Img3}
    img2= {Img4} />
    </div>
  )
}

export default Destination

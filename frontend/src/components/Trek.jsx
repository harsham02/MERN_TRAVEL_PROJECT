import React from 'react';
import './Trek.css';
import m1 from '../assets/mountain.jpg';
import m2 from '../assets/mountain1.jpg';
import m3 from '../assets/mountain2.jpg';
import m4 from '../assets/mountain3.jpg';
import m5 from '../assets/goa.jpg';
import m6 from '../assets/coorg.jpg';
import m7 from '../assets/munnar.jpg';
import m8 from '../assets/night.jpg';
import m9 from '../assets/service.jpg';
import TrekData from './TrekData';

const Trek = () => {
  const trekDetails = [
    {
      title: "Nilgiris Green Lake Trek",
      image: m1,
      text: "If you are a fitness enthusiast vacationing in Ooty, the Nilgiris Green Lake trek is an experience you wouldn’t want to miss. The climb promises an uphill trek through dense forests and a rewarding view at the Green Lake.",
      listItems: [
        "Intensity Level: Easy",
        "Trek Duration: 6 – 8 Hours",
        "Best Season: September – March",
        "Trail Distance: 2133 Metres",
        "Altitude: 7,000 Feet"
      ]
    },
    {
        title: "Perumal Peak",
        image: m2,
        text: "Perumal Peak in Kodaikanal is one of the highest peaks in the Perumalmalai Hills, offering beautiful views and a relatively easy trekking experience. It is popular among beginners.",
        listItems: [
            "Intensity Level: Easy",
            "Trek Duration: 6 – 8 Hours",
            "Best Season: January – May",
            "Trail Distance: 2439 Metres",
            "Altitude: 8,005 Feet"
        ]
    },
    {
        title: "Tadiyandamol Peak",
        image: m3,
        text: "Tadiyandamol Peak in Coorg is a non-demanding trek through Shola forests, popular among those new to trekking. It promises excellent views and a serene environment.",
        listItems: [
            "Intensity Level: Easy",
            "Trek Duration: 4 – 6 Hours",
            "Best Season: October – March",
            "Trail Distance: 1747 Metres",
            "Altitude: 5734 Feet"
        ]
    },
    {
        title: "Makalidurga Hill Fort",
        image: m4,
        text: "Makalidurga Hill Fort, located near Bangalore, offers a popular night trek experience. The fort houses a Shiva Temple and provides scenic views from its summit.",
        listItems: [
            "Intensity Level: Easy",
            "Trek Duration: 4 – 6 Hours",
            "Best Season: October – March",
            "Trail Distance: 1116 Metres",
            "Altitude: 3664 Feet"
        ]
    },
    {
        title: "Narasimha Parvata",
        image: m5,
        text: "Narasimha Parvata in Agumbe, Karnataka, is known for its thrilling trekking experience through dark forests. It requires a guide due to potential wildlife encounters.",
        listItems: [
            "Intensity Level: Difficult",
            "Trek Duration: 8 – 10 Hours",
            "Best Season: October – March",
            "Trail Distance: 1152 Metres",
            "Altitude: 3780 Feet"
        ]
    },
    {
        title: "Nishani Betta",
        image: m6,
        text: "Nishani Betta in Coorg, also known as Nishani Motte, offers an easy trekking trail popular among trekkers for its scenic views and accessible path.",
        listItems: [
            "Intensity Level: Easy",
            "Trek Duration: 3 – 4 Hours",
            "Best Season: July – March",
            "Trail Distance: 1270 Metres",
            "Altitude: 4167 Feet"
        ]
    },
    {
        title: "Talakona Waterfalls",
        image: m7,
        text: "The trek to Talakona Waterfalls in Andhra Pradesh offers multiple approach routes through Sri Venkateshwara National Park, providing a varied trekking experience.",
        listItems: [
            "Intensity Level: Average",
            "Trek Duration: 6 – 8 Hours",
            "Best Season: September – February",
            "Trail Distance: 82 Metres",
            "Altitude: 270 Feet"
        ]
    },
    {
        title: "Chokramudi Peak",
        image: m8,
        text: "Chokramudi Peak in Idukki District of Kerala offers a thrilling uphill climb and panoramic views of the Idukki region. It is a favorite among trekking enthusiasts.",
        listItems: [
            "Intensity Level: Average",
            "Trek Duration: 3 – 5 Hours",
            "Best Season: August – February",
            "Trail Distance: 2194 Metres",
            "Altitude: 7200 Feet"
        ]
    },
    {
        title: "Chembra Peak",
        image: m9,
        text: "Chembra Peak in Kerala, surrounded by tea estates, provides a panoramic view of the surrounding landscapes. Prior permission from the forest office is required for this trek.",
        listItems: [
            "Intensity Level: Average",
            "Trek Duration: 5 – 6 Hours",
            "Best Season: October – April",
            "Trail Distance: 2100 Metres",
            "Altitude: 6890 Feet"
        ]
    }
   
  ];

  return (
    <div className='Trek-container'>
      <h1 className='title'>Discover Our Exciting Treks!</h1>
      <div className="trek-list">
        {trekDetails.map((trek, index) => (
          <TrekData 
            key={index}
            title={trek.title}
            image={trek.image}
            text={trek.text}
            listItems={trek.listItems} 
          />
        ))}
      </div>
    </div>
  );
}

export default Trek;

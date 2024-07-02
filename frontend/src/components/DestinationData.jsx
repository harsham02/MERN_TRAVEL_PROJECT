import './Destination.css';
import React from 'react'

const DestinationData = (props) => {
  return (
    <div>
       <div className={props.cName}>
        <div className="des-text">
            <h2>{props.heading}</h2>
            <p>{props.data}</p>
        </div>
        <div className="image">
            <img src={props.img1} alt="img" />
            <img src={props.img2} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default DestinationData

import React from 'react'
const TestimonialData = (props) => {
  return (

      <div className="card">
           <img src={props.image} alt="image" />
          <div className='text-container'>
            <p>{props.text}</p>
                    <h4>{props.name}</h4>
                    <p className='who'>{props.who}</p>
                </div>
            </div>
  )
} 

export default TestimonialData

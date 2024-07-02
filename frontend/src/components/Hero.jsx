import React from 'react';
import './Hero.css';

const Hero = ({ cName, heroImg, title, text, url, btnText, btnClass }) => {
  return (
    <div className={cName}>
      <img alt="heroImg" src={heroImg} />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url} className={btnClass}>{btnText}</a>
      </div>
    </div>
  );
};

export default Hero;

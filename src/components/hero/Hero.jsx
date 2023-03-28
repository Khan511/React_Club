import React from "react";
import calories from "../../assets/calories.png";
import "./Hero.css";
import NumberCounter from "number-counter";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      {/*<div className="blur hero-blur"></div>*/}
      <div className="left-h">
        {/*The best add */}
        <div className="best_ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/*Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>
        {/* Figures*/}
        <div className="figures">
          <div>
            <h1>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </h1>
            <p>expert coaches</p>
          </div>
          <div>
            <h1>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </h1>
            <p>member joined</p>
          </div>
          <div>
            <h1>
              <NumberCounter end={50} start={25} delay="4" preFix="+" />
            </h1>
            <p>fitness programs</p>
          </div>
          <div className="calories">
            <img src={calories} alt="graph" />
            <div>
              <p>Calories burned</p>
              <h3>202 kcal</h3>
            </div>
          </div>
        </div>
        <div className="hearo_btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </div>
        <img
          src={hero_image_back}
          alt="Hero back"
          className="hero_image_back"
        />
        <img src={hero_image} alt="Hero" className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;

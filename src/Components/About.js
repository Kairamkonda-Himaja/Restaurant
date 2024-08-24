import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Nutrition starts with the food you eat.
                </h1>
        <p className="primary-text">
        Welcome to Foodiee.., where healthy meets convenient! Our team of expert Healthy Switcher chefs take care of all the prep work, from peeling and chopping to marinating, so you can enjoy fresh and nutritious meals without the hassle. We believe that everyone deserves access to wholesome food, and we're dedicated to making it easy for you to cook and savor delicious meals in the comfort of your own home. Let us do the prep work, so you can focus on what matters most - nourishing your body and delighting your taste buds!"

        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
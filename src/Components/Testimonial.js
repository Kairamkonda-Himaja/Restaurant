import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Here have a look on general reviwes..!!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I'm absolutely loving Foodiee..! As a busy professional, I struggle to find time to cook healthy meals. But with Foodiee.., it's a game-changer. The pre-prepped ingredients and easy-to-follow recipes make cooking a breeze. The food is always fresh and delicious, and I love the variety of options. The best part? No more food waste or hours spent meal planning and grocery shopping. [Restaurant Name] has made healthy eating easy and convenient. Highly recommend!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;

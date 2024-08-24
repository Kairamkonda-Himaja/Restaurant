import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select from our menu of healthy and delicious options, carefully crafted by our team of chefs.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Our Healthy Switcher chefs take care of all the prep work - peeling, chopping, marinating, and more - so you can focus on cooking",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Receive your pre-prepped ingredients and easy-to-follow recipe at your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
       




Follow our simple cooking instructions to prepare a fresh and nutritious meal in no time! <br />

With Foodiee.., cooking healthy meals has never been easier. No more meal planning, grocery shopping, or food waste. Just fresh, healthy food, delivered to your door and ready to cook!" <br />

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

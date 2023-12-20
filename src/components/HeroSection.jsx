import React from "react";
import buttonimg from "../assets/img/buttelement.png";
import heroimg from "../assets/img/hero-img.png";
const HeroSection = () => {
  return (
    <div className="text-center hero-sec">
      <div className="p-4">
        <h1>Web3Makr Redefining How You Create</h1>
      </div>
      <div className="p-4">
        <p>Unlock the blockchain potential to create Web3 Applications</p>
      </div>
      <div>
        <button>
          <img src={buttonimg} alt="" />
        </button>
      </div>
      <div className="p-4">
        <img height={500} width={700} src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;

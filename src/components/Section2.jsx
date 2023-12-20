import React from "react";
import sec2 from "../assets/img/sec2img.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo-4.png";
import logo5 from "../assets/img/logo5.png";
import logo6 from "../assets/img/logo6.png";
import logo7 from "../assets/img/logo7.png";
const Section2 = () => {
  return (
    <div>
      <div className="d-flex p-2 justify-content-around">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>
      <div className="row p-5 m-4">
        <div className="col col-lg-4 col-md-6 col-sm-12 ">
          <h1 className="p-2 pb-4">Create your own Web3 Masterpiece</h1>
          <p className="p-2 pb-4">
            Most entrepreneurs want to create their own web3 sites,
            unfortunately, they dont know much about creating one. Web3Makr
            makes it easier for newbies to create a blockchain-based
            collectibles solution without the hassle of leaving their favorite
            creation tools and by simple drag and drop functionality.
          </p>
          <button className="p-2 rounded button-styling">Start Building</button>
        </div>
        <div className="col col-lg-2 col-sm-0 col-md-0"></div>
        <div className="col col-lg-6 col-md-6 col-sm-12">
          <img width={550} height={600} src={sec2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;

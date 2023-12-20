import React from "react";
import img1 from "../assets/img/img1 (1).png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";

const Future = () => {
  return (
    <div className="text-center bg-dark text-white p-5 future">
      <div className="p-4">
        <h1>The Future of Web3 NoCode</h1>
      </div>
      <div className="p-4">
        <p>
          Web3Makr allows you to incorporate top ranked blockchain platforms
          into your work through the drag and drop feature.
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p>MultiChain</p>
          <p>Dashboard Tool</p>
        </div>

        <div>
          <div className="row">
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img1} alt="" />
              <p>Metamask Support</p>
            </div>
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img2} alt="" />
              <p>NFT Searcht</p>
            </div>
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img3} alt="" />
              <p>Moralis Integration</p>
            </div>
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img4} alt="" />
              <p>Ether.js</p>
            </div>
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img5} alt="" />
              <p>Hardhat</p>
            </div>
            <div className="col col-lg-4 col-sm-12 col-md-6 p-2">
              <img width={200} height={250} src={img6} alt="" />
              <p>Metamask Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;

import React from "react";
import Logo from "../assets/img/logo.png";
import { Nav } from "react-bootstrap";
import fb from "../assets/img/facebook.png";
import tt from "../assets/img/twitter.png";
import inst from "../assets/img/instagram.png";
const Footer = () => {
  return (
    <div className="footer p-4 row text-white bg-dark pt-5">
      <div className="col col-lg-4 col-md-12 col-sm-12 p-4">
        <p>copyright 2022@ Web3makr</p>
      </div>
      <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
        <img src={Logo} alt="" />
        <Nav
          className="me-auto my-2 my-lg-0 p-2"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Web3Makr</Nav.Link>
          <Nav.Link href="#action2">WhitePaper</Nav.Link>
          <Nav.Link href="#action1">Services</Nav.Link>
          <Nav.Link href="#action2">Tools</Nav.Link>
          <Nav.Link href="#action2">Contact Us</Nav.Link>
        </Nav>
      </div>
      <div className="col col-lg-4 col-md-12 col-sm-12">
        <div className="d-flex justify-content-end align-items-end">
          <img src={inst} alt="" />
          <img src={tt} alt="" />
          <img src={fb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

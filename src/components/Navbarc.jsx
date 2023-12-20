// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import Logo from "../assets/img/logo.png";

// //import { NavDropdown } from "react-bootstrap";

// const Navbar = () => {
//   return (
//     <div>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand href="#">
//             <img src={Logo} alt="" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Web3Makr</Nav.Link>
//               <Nav.Link href="#action2">WhitePaper</Nav.Link>
//               <Nav.Link href="#action1">Services</Nav.Link>
//               <Nav.Link href="#action2">Tools</Nav.Link>
//               <Nav.Link href="#action2">Contact Us</Nav.Link>
//             </Nav>
//             <Button variant="outline-primary">Primary</Button>{" "}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       ;
//     </div>
//   );
// };

// export default Navbar;

import React from "react";

import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/img/logo.png";
import { Button, Nav } from "react-bootstrap";
const Navbarc = () => {
  const navLinkStyle = { color: "white" };
  return (
    <div className=" header">
      <Navbar expand="lg" className=" p-5 ">
        <Navbar.Brand href="#home">
          <img width={120} height={60} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="d-flex justify-content-end">
          <Nav className="me-auto text-white">
            <Nav.Link href="#action1" style={navLinkStyle}>
              Web3Makr
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              WhitePaper
            </Nav.Link>
            <Nav.Link href="#action1" style={navLinkStyle}>
              Services
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              Tools
            </Nav.Link>
            <Nav.Link href="#action2" style={navLinkStyle}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Button variant="outline-primary" size="lg">
            Start for Free
          </Button>{" "}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarc;

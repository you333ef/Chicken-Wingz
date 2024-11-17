

import { FaCartShopping } from "react-icons/fa6";
import facebook from '../src/assets/images/001-facebook.svg'
import twitter from '../src/assets/images/Path.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-2" id="OSS_NAV">
      <Container fluid>
        <Navbar.Brand href="#" id="LOGO_NAV">Foodieland</Navbar.Brand> 
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto middle_NAV KAWTHAR "
           
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
         <Nav.Link href="#action1" id='cart_phone'>Cart </Nav.Link>
       
            <Nav.Link href="#action2">Recipes</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
           
          </Nav>
          <div className="d-flex iconsNavLeft text-start" >
          <img src={facebook} alt="@@SOO" />
          <img src={twitter} alt="@@ROO" />
          <FaCartShopping  id='cart_icon_Nav'/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

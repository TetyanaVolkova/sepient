import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Button, Row } from 'react-bootstrap';
import Image from '../../public/images/axiom-logo-small.png';
import Facebook from '../../public/images/fb-icon.png';
import Twitter from '../../public/images/twitter-icon.png';

class Footer extends Component {
  render() {
    return (
      <Navbar className="footer-navbar">
        <Row>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img src={Image} alt="logo"/> </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem>Privacy Policy</NavItem>
            <NavItem>Terms of Service</NavItem>
            <NavItem>Site Map</NavItem>
            <NavItem><Button><img src={Facebook} alt="Facebook"/></Button></NavItem>
            <NavItem className="facebook" href="#"><Button><img src={Twitter} alt="Twitter"/></Button></NavItem>
          </Nav>
        </Row>
      </Navbar>
    );
  }
}

export default Footer;

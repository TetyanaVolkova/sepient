import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import Image from '../../public/images/axiom-logo-main.png';
import Icon from '../../public/images/search-icon.png';
import Facebook from '../../public/images/fb-icon.png';
import Twitter from '../../public/images/twitter-icon.png';

class Header extends Component {
  render() {
    return (
      <Navbar className="header-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={Image} alt="logo"/> </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
              <InputGroup className="search-input">
                <FormControl type="text" />
                <InputGroup.Button>
                  <Button><img src={Icon} alt="icon"/></Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            </Navbar.Form>
          </Navbar.Collapse>
          <NavItem className="facebook" href="https://www.facebook.com/" target="_blank"><Button><img src={Facebook} alt="Facebook"/></Button></NavItem>
          <NavItem href="https://www.twitter.com/" target="_blank"><Button><img src={Twitter} alt="Twitter"/></Button></NavItem>
          <NavItem>My Account</NavItem>
          <NavItem>Cart</NavItem>
          <NavItem>Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

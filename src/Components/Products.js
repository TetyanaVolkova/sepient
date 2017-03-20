import React, { Component } from 'react';
import {Row, Col, Grid, ButtonToolbar, MenuItem, Dropdown, Button, FormGroup, FormControl, InputGroup, DropdownButton } from 'react-bootstrap';
import ProdImage from '../../public/images/tough-mojo-jacket-img1.png';
import NumericInput from 'react-numeric-input';

class Products extends Component {
  render() {
    return (
      <Grid className="product-container">
        <Row>
          <Col md={6}>
            <img src={ProdImage} alt="product"/>
          </Col>
          <Col className="col-p-elements" md={6}>
            <h1>Tough Mojo Jacket</h1>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>SCHOELLER MICROFIBER SHELL</p>
            <p>DIAGONAL QUILTING</p>
            <p>MICROFIBER RIPSTOP LINER</p>
            <p>ZIPPER GARAGE AT COLLAR</p>
            <p>ANCHORED BOTTOM-HEM ADJUSTERS</p>
            <p>3-IN-1 FRONT POCKETS</p>
            <p>ZIPPERED CHEST POCKET</p>
            <p>TWO INTERIOR ZIPPERD POCKETS</p>
            <p>MADE IN THE PHILIPPINES</p>

            <ButtonToolbar>

            <Dropdown>
              <Button className="dropdown-custom">
                Select Size
              </Button>
              <Dropdown.Toggle className="dropdown-custom"/>
              <Dropdown.Menu>
                <MenuItem eventKey="1">XSmall</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2">Small</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3">Medium</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Large</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">XLarge</MenuItem>
              </Dropdown.Menu>
            </Dropdown>

              <Dropdown>
                <Button className="dropdown-custom">
                  Select Color
                </Button>
                <Dropdown.Toggle className="dropdown-custom"/>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">White</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Black</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">Red</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Blue</MenuItem>
                </Dropdown.Menu>
              </Dropdown>

            </ButtonToolbar>
            <ButtonToolbar>
              <Dropdown>
                <Button className="numeric">
                  0
                </Button>
                <Dropdown.Toggle className="dropdown-custom"/>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">1</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">2</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">3</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">4</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <Button className="add-to-cart-btn">Add To Cart</Button>
            </ButtonToolbar>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Products;

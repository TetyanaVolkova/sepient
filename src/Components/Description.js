import React, { Component } from 'react';
import {Row, Col, Grid } from 'react-bootstrap';
import ProdImage from '../../public/images/tough-mojo-jacket-img2.png';

class Description extends Component {
  render() {
    return (
      <Grid className="description-container">
        <Row>
          <Col className="prod-img" md={6}>
            <img src={ProdImage} alt="product"/>
          </Col>
          <Col className="col-p-elements" md={6}>
            <p>Our most insulated jacket to date, the city-styled HiHighline is designed to keep you warm during the deep freeze of winter.</p>
            <p>With 300 grams of PrimaLoft&reg; ONE insulation, the Hidhline offers incredible heat retention while remaining form fitting and low volum - essentially all the warmth of a puffer jacket without all the puff. New product by Aether! the Highline Jacket is their most insulated jacket to date. The sleek fit, city-style jacket has 300 grams of PrimaLoft ONE insulation, offering incredible heat retention while remaining form fitting and low volume, it essentially keeps you warm like a puffer jacket but without all the puff. The Highline´s outer shell is made from a water-resistant fabric, and features plenty of storage with 5 outer and 2 inside pockets.</p>
            <p>The Highline Jacket by Aether Apparel is a slim, low-profile jacket that provides a surprising amount of warmth thanks to 300 grams of Primaloft® ONE insulation. The exterior is diagonally quilted water-resistant Schoeller® microfiber fabric and the while the inside is soft microfiber ripstop nylon.The Highline can be worn as a jacket in its own right, or it can be used as a middle layer if you’re planning to head into some double-digit sub-zero temperatures.The Highline can be worn as a jacket in its own right, or it can be used as a middle layer if you’re planning to head into some double-digit sub-zero temperatures.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Description;

import React, { Component } from 'react';
import {Row, Col, Grid } from 'react-bootstrap';
import ProdImage from '../../public/images/tough-mojo-jacket-img1.png';

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
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
            <p>300 GRAMS OF PRIMALOFT ONE INSULATION</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Products;

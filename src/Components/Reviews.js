import React, { Component } from 'react';
import {Row, Col, Grid } from 'react-bootstrap';

class Reviews extends Component {
  render() {
    let reviews;
    if(this.props.data){
        reviews = this.props.data.map(review => {
        let image = 'images/' + review.image;
        return (
                <Row key={review.name}>
                  <Col md={2}>
                    <figure>
                      <img src={image} alt="reviewer"/>
                      <figcaption>{review.name}</figcaption>
                    </figure>
                  </Col>
                  <Col md={10}>
                    <h3>{review.title}</h3>
                    <p>{review.review}</p>
                  </Col>
                </Row>
              );
      });
    }
    return (
      <Grid className="review-container">
      <Row>
        <Col md={2}></Col>
        <Col md={2}><h1>Reviews</h1></Col>
        <Col className="review-link" md={4}><a href="#">Write a review on this product</a></Col>
      </Row>
        {reviews}
      </Grid>
    );
  }
}

export default Reviews;

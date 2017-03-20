import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Button, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  getInitialState() {
    return { showModal: false };
  }

 close() {
   this.setState({ showModal: false });

 }

 open() {
    this.setState({showModal: true}, function(){
      console.log(this.state);
    }).bind(this);
  }

  render() { console.log(this.state);
    let reviews;
    if(this.props.data && this.state){
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
                    <h3><strong>{review.title}</strong> {review.date}</h3>
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
        <Col className="review-link" md={4}><Button onClick={this.open} >Write a review on this product</Button></Col>

          <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title>Please Rate the Tough Mojo Jacket </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Review Title:
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="" />
                  </Col>
                    </FormGroup>
                    <Col sm={12}>
                      <FormGroup controlId="formControlsTextarea">
                        <FormControl componentClass="textarea" placeholder=" -Write your review here -" />
                      </FormGroup>
                    </Col>
              </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="primary" bsSize="large" onClick={this.close}>Submit Review</Button>
              </Modal.Footer>
            </Modal>


      </Row>
        {reviews}
      </Grid>
    );
  }
}

export default Reviews;

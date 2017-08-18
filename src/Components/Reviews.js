import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Button, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      submitingReviews: []
    };
    this.setSubmitingStars = this.setSubmitingStars.bind(this);
    this.close = this.close.bind(this);
  }
  setSubmitingStars() {
    var arr = [];
    for(var i=0; i < 5; i++) {
      arr.push(<img key={i} src='images/star.png' alt="stars" onClick={this.changeStars.bind(this, i)}/>);
    }
    this.setState({submitingReviews: arr});
    console.log(this.state.submitingReviews);
    this.setState({showModal: true});
  }

  changeStars(index, event) {
      event.preventDefault();
            let arr = [];
            console.log(event.target.parentNode);
            console.log(index);
            for (var i=0; i<5; i++) {
              if(i <= index) {
                arr.push(<img key={i} src="images/star-gray.png" alt="gray star" onClick={this.changeStars.bind(this, i)} />);
              } else {
                arr.push(<img key={i} src="images/star.png" alt="white star" onClick={this.changeStars.bind(this, i)} />);
              }
            }
            this.setState({submitingReviews: arr});
  }

  getInitialState() {
    return { showModal: false };
  }

 close() {
   this.setState({ showModal: false });

 }

 // open() {
 //    this.setState({showModal: true});
 //    this.setSubmitingStars;
 //  }

  render() {
    let reviews;

    if(this.props.data){
      reviews = this.props.data.map(review => {
        let starsArray = [];
        let image = 'images/' + review.image;
        let whiteStar = 'images/' + review.starPath;
        let grayStar = 'images/' + review.starGrayPath;
        let stars = review.stars;
          for (var i=0; i < 5; i++) {
            if (stars > i) {
              starsArray.push(<img key={i} src={grayStar} alt="gray star" />);
            } else {
                starsArray.push(<img key={i} src={whiteStar} alt="white star" />);
              }
          }
        return (
                <Row key={review.name}>
                  <Col md={2}>
                    <figure>
                      <img src={image} alt="reviewer"/>
                      <figcaption>{review.name}</figcaption>
                    </figure>
                  </Col>
                  <Col className="review-p" md={10}>
                    <h3><strong>{review.title}</strong> {review.date} {starsArray}</h3>
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
        <Col className="review-link" md={4}><Button onClick={this.setSubmitingStars} >Write a review on this product</Button></Col>

          <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title>Please Rate the <strong>Tough Mojo Jacket </strong> <span> {this.state.submitingReviews}</span> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Review Title:
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="" />
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

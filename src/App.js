import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Submenu from './Components/Submenu';
import Products from './Components/Products';
import Description from './Components/Description';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData:{}
    }
  }

  componentWillMount(){
    this.getReviewsData();
  }

  getReviewsData(){
    $.ajax({
      type: "GET",
      url:"http://localhost:3000/reviewsData.json",
      cache: false,
      dataType:'JSON',
      async:  false,
      success: function(data){
        this.setState({reviewsData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  render() {
    console.log(this.state.reviewsData);
    return (
      <div className='App'>
        <Header/>
        <Submenu/>
        <Products/>
        <Description/>
        <Reviews data={this.state.reviewsData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

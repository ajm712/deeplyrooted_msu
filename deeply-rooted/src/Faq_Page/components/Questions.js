import React, { Component } from 'react';
import '../styles/Questions.css';
import adv from '../../Images/deeplyrootedadvanced.GIF';
import map from '../../Images/deeplyrootedmap.GIF';
import ran from '../../Images/deeplyrooted-random.GIF';
import {Button,Panel}from 'react-bootstrap';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  //Displays the default paragraph for FAQ Page
  render() {
    return (
      <div>
        <div className="center" style={{paddingRight: '15%'}}>
          <h2>Frequently Asked Questions</h2>
          <div align="left">
            <p><b>1. What is Random Selection?</b></p>
            <p> Random Selection performs a random search and then displays the results from it.</p>
           
            <img src={ran} alt="Random Selection Example" className="center" /><br></br>

  

           
          <p><b> 2. What is the difference between image view and table view? How to conduct an advanced search?</b></p>
              Image view displays images from search that display infomration when you click on it.<br></br> Table view displays the information in a table with no images.<br></br>
      
             <img src={adv} alt="Advanced Example" className="center" /><br></br>


              <p><b> 3.How to search via map?</b></p>
              <img src={map} alt="Advanced Example" className="center" />

             
              
             </div> 
          <br></br><br></br>
          <p>For information on how to contribute to the content of Deeply Rooted please visit MSU's Deeply Rooted <a href="http://lib.msstate.edu/deeplyrooted#specs">contribution page</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Questions;
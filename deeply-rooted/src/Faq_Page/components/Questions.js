import React, { Component } from 'react';
import '../styles/Questions.css';
import logo1 from '../../Images/Random-Selection(1).gif';
import logo2 from '../../Images/Random-Selection(2).gif';
import logo3 from '../../Images/tablevsimage.gif';

class Questions extends Component {
  //Displays the default paragraph for FAQ Page
  render() {
    return (
      <div>
        <div className="center">
          <h2>Frequently Asked Questions</h2>
          
           <p> 1. What is Random Selection?<br></br>
            Random Selection performs a random search and then displays the results from it.<br></br>
           
            </p>
            <img src={logo1} alt="Random Selection Example" className="center" />
            
            <p> 2. What is the difference between image view and table view?
              <br></br> Image view displays images from search that display infomration when you click on it. Table view displays the information in a table with no images.
            </p>

              
            

          <p>For information on how to contribute to the content of Deeply Rooted please visit MSU's Deeply Rooted <a href="http://lib.msstate.edu/deeplyrooted#specs">contribution page</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Questions;
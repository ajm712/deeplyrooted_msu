import React, { Component } from 'react';
import '../styles/Questions.css';

class Questions extends Component {
  //Displays the default paragraph for FAQ Page
  render() {
    return (
      <div>
        <div className="questionspage">
          <h2>Frequently Asked Questions</h2>
          
           <p> 1. What is Random Selection?<br></br>
            Random Selection performs a random search and then displays the results from it.<br></br>
            </p>
            
            
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
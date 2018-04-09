import React, { Component } from 'react';
import '../styles/Questions.css';

class Questions extends Component {
  //Displays the default paragraph for FAQ Page
  render() {
    return (
      <div>
        <div className="questionspage">
          <h2>Frequently Asked Questions</h2>
          
             <p>Placeholder for faqs and/or gifs.</p>

          <p>For information on how to contribute to the content of Deeply Rooted please visit MSU's Deeply Rooted <a href="http://lib.msstate.edu/deeplyrooted#specs">contribution page</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Questions;
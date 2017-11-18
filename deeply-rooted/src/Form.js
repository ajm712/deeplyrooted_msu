import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import TextBox from './TextBox.js';
//import registerServiceWorker from './registerServiceWorker';

class Form extends React.Component {
  changeInput(event) {
    var selection = event.target.value; //selection is equal to the current value of the dropdown box
    ReactDOM.render(<TextBox selection={selection}/>, document.getElementById('text-box')); //Calls TextBox class which decides which user input to display
  }

  /*Renders a dropdown box with the following selections*/
  /*Once the user makes a selection the changeInput fucntion is called*/
  render() {
    return (
      <div className="inLine">
        <form>
          <label>
            <select className="dropDown" onChange={this.changeInput} defaultValue="Subject">
              <option value="Subject">Subject</option>
              <option value="Title">Title</option>
              <option value="Rights">Rights</option>
              <option value="Format">Format</option>
              <option value="Collection">Collection</option>
              <option value="State">Location</option>
              <option value="Author">Author</option>
              <option value="Date">Date</option>
              <option value="Language">Language</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;

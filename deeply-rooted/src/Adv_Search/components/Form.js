import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './TextBox.js';

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
              <option value="Subject" role="menuitem">Subject</option>
              <option value="Title" role="menuitem">Title</option>
              <option value="Rights" role="menuitem">Rights</option>
              <option value="Format" role="menuitem">Format</option>
              <option value="Collection" role="menuitem">Collection</option>
              <option value="State" role="menuitem">Location</option>
              <option value="University" role="menuitem">University</option>
              <option value="Author" role="menuitem">Author</option>
              <option value="Date" role="menuitem">Date</option>
              <option value="Language" role="menuitem">Language</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class TextBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) { //Stores the user input value
      var name = event.target.name;
      this.setState({[name]: event.target.value});
    }
  
    handleSubmit(event) { //Currently just prints the search result to the screen but eventually will send info to the API call
      var name = event.target.name;
      var search = this.state[name];
      alert(search);
      event.preventDefault();
    }
      
    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box 

      if(selection == "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
  
      else if(selection == "Topic")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box </p>
          </div>
        );
      }

      else if(selection == "Title")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box </p>
          </div>
        );
      }

      else if(selection == "Rights")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }

      else if(selection == "Format")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }

      else if(selection == "Collection")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }

      else if(selection == "State")
      {
        return (
          <div className="inLine">
          <p> Implement Drop Box With All States</p>
          </div>
        );
      }

      else if(selection == "Author")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }

      else if(selection == "Date")
      {
        return (
          <div className="inLine">
          <p> Implement Calender </p>
          </div>
        );
      }

      else if(selection == "Description")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }

      else if(selection == "Language")
      {
        return (
          <div className="inLine">
          <p> Implement Text Box</p>
          </div>
        );
      }
  
      else
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
    }
  }
    
  export default TextBox;
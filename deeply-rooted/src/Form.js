import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Books from './DisplayBook'
import ApiWrapper from './ApiWrapper.js';
import registerServiceWorker from './registerServiceWorker';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This is call everytime the user types into the textbox and it assigns the textbox value to the appropriate boxes name
  handleChange(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  //This is called when the user selects submit 
  //Currently it only alerts to the screen the user input but eventually it should call the API function
  handleSubmit(event) {
    var name = event.target.name;
    var search = this.state[name];
    console.log(this.state);
    alert(search);

    /*
    The functions below
    1) Calls the API wrapper to create the URL
    2) Passes the URL to the Book class, which pulls/ displays this information
    3) Then it is rendered onto the page
    **It requires heavy debuging so I commented it out
    
    var url = ApiWrapper.makeCall(search);
    console.log(url);
    //ReactDOM.render(<Books url={url} />, document.getElementById('root'));
    */

    event.preventDefault();
  }

  render() {
    return (
      <div> {/*Just basic html below*/}      
        <h1>Test Searches:</h1>
        <hr/>

        <form>
        <h3>Search by Subject</h3>
        <input type="text"  name="subject" value={this.state.name} onChange={this.handleChange} style={{marginRight: 2 + '%'}}/> 
        <input type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/> {/*IMPORTANT: The submit name should equal the textbox name*/}
        <hr/>

        <h3>Date</h3>
        <input type="text" name="date" value={this.state.name}  onChange={this.handleChange} style={{marginRight: 2 + '%'}}/>
        <input type="submit" name="date" value="Submit" onClick={this.handleSubmit} /> {/*IMPORTANT: The submit name should equal the textbox name*/}
        </form>
        <hr/>

      </div>

    );
  }
}

export default Form;
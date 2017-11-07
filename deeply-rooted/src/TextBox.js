import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiWrapper from './ApiWrapper.js';
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
      //Implement API Call Here's an example provided by Joesph you may have to change things to get it implemented
      //The commented code is how to make an api call
      //var results = ApiWrapper.makeCall({language:"english", page:"1"});
      //console.log(results);      
      /*Explanation:
      var results is a variable to store the results from the api call
      ApiWrapper.makeCall() is a function to call api calls
      langauge is what im searching by so this will be replaces by subject, title, date, etc. depending on the search
      "english" is the language im searching for this should be replaced by the variable search
      Once results are renturned the display class will be called, but this will be implemented later for now you can check the console for results
      Also page has not been implemented yet so you can leave this at 1 for now
      */
      event.preventDefault();
    }
      
    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box 

      if(selection == "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" placeholder = "Insert Subject Here" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
  
      else if(selection == "Topic")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Topic" placeholder = "Insert Topic Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Title")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Title" placeholder = "Insert Title Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Title" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Rights")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Rights" placeholder = "Insert Rights Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Rights" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Format")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Format" placeholder = "Insert Format Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Format" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Collection")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Collection" placeholder = "Insert Collection Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Collection" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "State")
      {
        return (
          <div className="inLine">
            <form>
              <label>
                <select className="dropDownState" onChange={this.handleSubmit}>
                  <option value="ALL">--Select a State--</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arizona">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District Of Columbia">District Of Columbia</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennesee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </label>
              <input className="submitButton" type="submit" name="State" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection == "Author")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="topic" placeholder = "Insert Author Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
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
          <form>
          <input className="textBox" type="text" name="Description" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Description" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Language")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Language" placeholder = "Insert Language Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Language" value="Submit" onClick={this.handleSubmit}/>
          </form>
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
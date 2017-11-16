import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBookTwo.js';
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
    
    handleDrop(event) {
        var searchType = event.target.name;
        var userInput = event.target.value; //selection is equal to the current value of the dropdown box   
        var formData = {
          subject: "",
          rights: "",
          title: "",
          format: "",
          collection: "",
          state: "",
          language: "",
          creator: "",
          date: "",
          page: "30"
        };

        formData[searchType] = userInput;

        var results = ApiWrapper.makeCall({subject: formData.subject, 
          rights: formData.rights, 
          title: formData.title, 
          format: formData.format, 
          collection: formData.collection, 
          state: formData.state, 
          language: formData.language, 
          creator: formData.creator,
          date: formData.date, 
          page_size: formData.page,
         });
        
        console.log(results);
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        
    }
  
    handleSubmit(event) { 
      var searchType = event.target.name;
      var userInput = this.state[searchType];
      var formData = {
        subject: "",
        rights: "",
        title: "",
        format: "",
        collection: "",
        state: "",
        language: "",
        creator: "",
        date: "",
        page: "30"
      };

      formData[searchType] = userInput;
      console.log(formData);

      var results = ApiWrapper.makeCall({subject: formData.subject, 
                                         rights: formData.rights, 
                                         title: formData.title, 
                                         format: formData.format, 
                                         collection: formData.collection, 
                                         state: formData.state, 
                                         language: formData.language, 
                                         creator: formData.creator,
                                         date: formData.date, 
                                         page_size: formData.page,
                                        });

      console.log(results); 
      ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root')); 
      event.preventDefault();
    }

    handleAdvancedSearch(event) { 
      var searchParameters = ["subject", "rights", "title", "format", "collection", "state", "language", "creator", "date"];
      var searchType;
      var userInput;
      var formData = {
        subject: "",
        rights: "",
        title: "",
        format: "",
        collection: "",
        state: "",
        language: "",
        creator: "",
        date: "",
        page: "30"
      };

      for (var i = 0; i < searchParameters.length; i++)
      {
        searchType = searchParameters[i]
        userInput = this.state[searchType]; 
        
        if (userInput !== "")
          formData[searchType] = userInput;
      }
      

      var results = ApiWrapper.makeCall({subject: formData.subject, 
                                         rights: formData.rights, 
                                         title: formData.title, 
                                         format: formData.format, 
                                         collection: formData.collection, 
                                         state: formData.state, 
                                         language: formData.language, 
                                         creator: formData.creator,
                                         date: formData.date, 
                                         page_size: formData.page,
                                        });

      console.log(results); 
      ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root')); 
      event.preventDefault();
    }

    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box

      if(selection === "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" placeholder="Insert Subject Here" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection === "Title")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="title" placeholder="Insert Title Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="title" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection === "Rights")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="rights" placeholder="Insert Rights Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="rights" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection === "Format")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="format" placeholder="Insert Format Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="format" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection === "Collection")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="collection" placeholder="Insert Collection Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="collection" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection === "State")
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
            </form>
          </div>
        );
      }

      else if(selection === "Creator")
      {
        return (
          <div className="inLine">
            <form>
                <input className="textBox" type="text" name="creator" placeholder="Insert Author Here" value={this.state.name} onChange={this.handleChange}/>
                <input className="submitButton" type="submit" name="creator" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection === "Date")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="date" name="date" value={this.state.name} onChange={this.handleChange}/>
              <input className="submitButton" type="submit" name="date" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection === "Description")
      {
        return (
          <div className="inLine">
            <form>
                <input className="textBox" type="text" name="description" value={this.state.name} onChange={this.handleChange}/>
                <input className="submitButton" type="submit" name="description" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection === "Language")
      {
        return (
          <div className="inLine">
           <form>
             <label>
                <select className="dropDown" name="language" onChange={this.handleDrop}>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                  <option value="Swedish">Swedish</option>
                  <option value="French">French</option>
                  <option value="Portugese">Portugese</option>
                  <option value="Romanian">Romanian</option>
                </select>
              </label>
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

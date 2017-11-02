import React from 'react';
import ReactDOM from 'react-dom';
import Books from './DisplayBooks.js';
import './SearchBar.css';
import ApiWrapper from './ApiWrapper.js';


class SearchBar extends React.Component {
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
        var name = event.target.name;
        var selection = event.target.value; //selection is equal to the current value of the dropdown box
        var results = ApiWrapper.makeCall(name,selection);
        console.log(results);
        ReactDOM.render(<Books results={results}/>, document.getElementById('root'));
    }

    handleSubmit(event) { //Currently just prints the search result to the screen but eventually will send info to the API call
      var name = event.target.name;
      var search = this.state[name];
      //alert(search);
      var results = ApiWrapper.makeCall(name,search);
      console.log(results);
      ReactDOM.render(<Books results={results}/>, document.getElementById('root'));
      event.preventDefault();
    }

    render() {
        return (
          <div className="nbarsearch">
            <form className="form">
              <input className="searchBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/>
              <input className="searchButton" type="submit" name="subject" value="&#xf002;" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
    }
}


export default SearchBar;

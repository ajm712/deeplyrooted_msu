import React from 'react';
import ReactDOM from 'react-dom';
import Books from './DisplayBooks.js';
import './SearchBar.css';
import SimpleSearch from './SimpleSearch.js';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { //Stores the user input value
        this.setState({value: event.target.value});
    }

    // handleDrop(event) {
    //     var name = event.target.name;
    //     var selection = event.target.value; //selection is equal to the current value of the dropdown box
    //     var results = SimpleSearch.makeCall(name,selection);
    //     console.log(results);
    //     ReactDOM.render(<Books results={results}/>, document.getElementById('root'));
    // }

    handleSubmit(event) { //Currently just prints the search result to the screen but eventually will send info to the API call
        //console.log(this.state.value)
        var results = SimpleSearch.makeCall(this.state.value);
        console.log(results);
        ReactDOM.render(<Books results={results}/>, document.getElementById('root'));
        event.preventDefault();
    }

    render() {
        return (
          <div className="nbarsearch">
            <form className="form">
              <input className="searchBox" type="text"  value={this.state.value} onChange={this.handleChange}/>
              <input className="searchButton" type="submit" name="subject" value="&#xf002;" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
    }
}


export default SearchBar;

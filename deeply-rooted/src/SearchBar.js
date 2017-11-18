import React from 'react';
import ReactDOM from 'react-dom';
import Books from './DisplayBook.js';
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

    handleSubmit(event) { //Currently just prints the search result to the screen but eventually will send info to the API call
        //console.log(this.state.value)
        var results = SimpleSearch.makeCall(this.state.value);
        console.log(results);
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        event.preventDefault();
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    render() {
        return (
          <div className="nbarsearch">
            <form className="form">
              <input ref={(input) => { this.nameInput = input; }} className="searchBox" type="text"  value={this.state.value} onChange={this.handleChange}/>
              <input className="searchButton" type="submit" name="subject" value="&#xf002;" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
    }
}


export default SearchBar;

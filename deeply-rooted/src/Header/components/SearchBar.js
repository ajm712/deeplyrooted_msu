import React from 'react';
import ReactDOM from 'react-dom';
import Books from '../../Display/components/DisplayBook.js';
import '../styles/SearchBar.css';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Footer from '../../Footer/components/Footer.js';

//Code for search bar
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', pageSize: "30"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { //Stores the user input value
        this.setState({value: event.target.value});
    }

    handleSubmit(event) { //Sends user input to the API call and sends results to BookDisplay
        var results = ApiWrapper.makeCall({
            subject: "",
            rights: "",
            title: "",
            format: "",
            collection: "",
            state: "",
            language: "",
            creator: "",
            date: "",
            other:this.state.value,
            page_size: "30",
            page: "1"
           });
        ReactDOM.render(<Books view="componentView" results={results} pageSize="30" />, document.getElementById('root'));
        ReactDOM.render(<Footer page="adv_search"/>, document.getElementById('footer'));
        event.preventDefault();
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    //Renders search bar
    render() {
        return (
          <div className="nbarsearch">
            <form className="form">
              <input ref={(input) => { this.nameInput = input; }} className="searchBox" type="text" aria-label="Search Box"  value={this.state.value} onChange={this.handleChange}/>
              <input className="searchButton" type="submit" name="subject" value="&#xf002;" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
    }
}


export default SearchBar;

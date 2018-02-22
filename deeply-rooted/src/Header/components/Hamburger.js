import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import {Button} from 'react-bootstrap';
import About from '../../About_Page/components/About.js';
import Home from '../../Home_Page/components/Home.js';
import Footer from '../../Footer/components/Footer.js';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Books from '../../Display/components/DisplayBook.js';
import Advanced from '../../Adv_Search/components/AdvancedSearch.js';
import TextBox from '../../Adv_Search/components/TextBox.js';
import Form from '../../Adv_Search/components/Form.js';
import RandomSelection from '../../Services/components/RandomSelection.js';
import '../styles/Hamburger.css';


//Creates and handles selections made on the hamburger menu
class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = { isMenuOpen: false };
        this.about = this.about.bind(this);
        this.home = this.home.bind(this);
        this.adv_search = this.adv_search.bind(this);
        this.rand_book = this.rand_book.bind(this);
    }

    //Closes the hamburger menu
    closeMenu() {
        this.setState({ isMenuOpen: false })
    }

    //Renders appropriate components to the screen for the about page
    about() {
        this.closeMenu();
        ReactDOM.render(<About />, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));
    }

    //Renders appropriate components to the screen for the home page
    home() {
        this.closeMenu();
        ReactDOM.render(<Home />, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));  
    }

    //Renders appropriate components to the screen for the advanced search page
    adv_search() {
        this.closeMenu();
        var results = ApiWrapper.makeCall({language:"english", page_size: "30", page: "1"});
        ReactDOM.render(<Form />, document.getElementById('dropbox'));
        ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box'));
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        ReactDOM.render(<Advanced />, document.getElementById('adv_search'));
    }

    rand_book() {
        this.closeMenu();
        var results = RandomSelection.random_select({page_size: 30});
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search')); 
    }

    //Creates the burger menu and selection buttons
    render () {
        return (
            <div className="Hamburger">
                <Menu id="hamburger-menu" isOpen={ this.state.isMenuOpen }>
                    <Button className="btn_burger" onClick={this.home}>Home</Button>
                    <Button className="btn_burger" onClick={this.rand_book}>Random Selection</Button>
                    <Button className="btn_burger" onClick={this.adv_search}>Advanced Search</Button>
                    <Button className="btn_burger" onClick={this.about}>About</Button>
                </Menu>
            </div>
        );
    }
}

export default Hamburger;

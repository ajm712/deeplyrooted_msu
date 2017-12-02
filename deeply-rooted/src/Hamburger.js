import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';
import About from './About.js';
import Home from './Home.js';
import {Button} from 'react-bootstrap'
import Form from './Form.js';
import TextBox from './TextBox.js';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBook.js';
import Footer from './Footer.js';
import Advanced from './AdvancedSearch.js';


class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = { isMenuOpen: false };
        this.about = this.about.bind(this);
        this.home = this.home.bind(this);
        this.adv_search = this.adv_search.bind(this);
    }

    closeMenu() {
        this.setState({ isMenuOpen: false })
    }

    about() {
        this.closeMenu();
        ReactDOM.render(<About />, document.getElementById('root'));
        ReactDOM.render(<Footer page="other"/>, document.getElementById('footer'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));
    }

    home() {
        this.closeMenu();
        ReactDOM.render(<Home />, document.getElementById('root'));
        ReactDOM.render(<Footer page="other"/>, document.getElementById('footer'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));  
    }

    adv_search() {
        this.closeMenu();
        var results = ApiWrapper.makeCall({language:"english", page_size: "30", page: "1"});
        ReactDOM.render(<Form />, document.getElementById('dropbox'));
        ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box'));
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        ReactDOM.render(<Advanced />, document.getElementById('adv_search'));
        ReactDOM.render(<Footer page="adv_search"/>, document.getElementById('footer')); 
    }

    render () {
        return (
            <div className="Hamburger">
                <Menu id="hamburger-menu" isOpen={ this.state.isMenuOpen }>
                    <Button className="btn_burger" onClick={this.home}>Home</Button>
                    <Button className="btn_burger" onClick={this.adv_search}>Advanced Search</Button>
                    <Button className="btn_burger" onClick={this.about}>About</Button>
                </Menu>
            </div>
        );
    }
}

export default Hamburger;

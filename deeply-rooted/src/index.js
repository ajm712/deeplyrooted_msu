import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
//import Form from './Form.js';
//import TextBox from './TextBox.js';
import NavBar from './NavBar.js';
import Hamburger from './Hamburger.js';
import SearchBar from './SearchBar.js';
//import Home from './Home.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Form />, document.getElementById('dropbox')); //Displays the dropdownbox
ReactDOM.render(<Header />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<NavBar><Hamburger /><SearchBar /></NavBar>, document.getElementById('navbar')); //Displays the navbar
//ReactDOM.render(<Home />, document.getElementById('home'));
//ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box')); //Displays the defualt textbox

registerServiceWorker();

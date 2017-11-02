import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form.js';
import TextBox from './TextBox.js';
import NavBar from './NavBar.js';
import Hamburger from './Hamburger.js';
import SearchBar from './SearchBar.js';

//import ApiWrapper from './ApiWrapper.js';
//import Books from './DisplayBooks.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('dropbox')); //Displays the dropdownbox
ReactDOM.render(<App />, document.getElementById('header')); //Displays the spinning react label
//ReactDOM.render(<NavBar />, document.getElementById('navbar')); //Displays the navbar

ReactDOM.render(<NavBar><Hamburger /><SearchBar /></NavBar>, document.getElementById('navbar')); //Displays the navbar

ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box')); //Displays the defualt textbox
//ReactDOM.render(<Hamburger />, document.getElementById('hamburger')); //Displays the hamburger menu
registerServiceWorker();

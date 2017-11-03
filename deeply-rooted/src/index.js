import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Hamburger from './Hamburger.js';
import SearchBar from './SearchBar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<NavBar><Hamburger /><SearchBar /></NavBar>, document.getElementById('navbar')); //Displays the navbar
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();

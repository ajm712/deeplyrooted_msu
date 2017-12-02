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

//What is rendered on to the screen when the website is first loaded
ReactDOM.render(<Header />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<NavBar><Hamburger /><SearchBar /></NavBar>, document.getElementById('navbar')); //Displays the navbar
ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Footer page="other"/>, document.getElementById('footer'));

registerServiceWorker();

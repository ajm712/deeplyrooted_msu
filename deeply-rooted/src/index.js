import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/components/Header.js';
import NavBar from './Header/components/NavBar.js';
import Hamburger from './Header/components/Hamburger.js';
import SearchBar from './Header/components/SearchBar.js';
import Home from './Home_Page/components/Home.js';
import Footer from './Footer/components/Footer.js';
import registerServiceWorker from './Services/components/registerServiceWorker';

//What is rendered on to the screen when the website is first loaded
ReactDOM.render(<Header />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<NavBar><Hamburger /><SearchBar /></NavBar>, document.getElementById('navbar')); //Displays the navbar
ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Footer page="other"/>, document.getElementById('footer'));

registerServiceWorker();

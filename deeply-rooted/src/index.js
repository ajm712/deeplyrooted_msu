/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBookTwo.js';
import Form from './Form.js';
import TextBox from './TextBox.js';

var results = ApiWrapper.makeCall({language:"english"});
console.log(results);

ReactDOM.render(<App />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<Form />, document.getElementById('dropbox')); //Displays the dropdownbox
ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box')); //Displays the defualt textbox  
ReactDOM.render(<Books results={results}/>, document.getElementById('bookDisplay'));
registerServiceWorker(); 
*/

/****************Split***************/
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
ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();

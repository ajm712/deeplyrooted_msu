import React from 'react';
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

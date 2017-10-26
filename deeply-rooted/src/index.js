<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBookTwo.js';

var $ = require('jquery')
$.ajaxSetup({
  async: false
});

var results = ApiWrapper.makeCall({language:"english"})
console.log(results)

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Books results={results}/>, document.getElementById('bookDisplay'))

registerServiceWorker(); 

=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form.js';
import TextBox from './TextBox.js';
import ApiWrapper from './ApiWrapper.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('dropbox')); //Displays the dropdownbox
ReactDOM.render(<App />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box')); //Displays the defualt textbox  
registerServiceWorker();

>>>>>>> html-form

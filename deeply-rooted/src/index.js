import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Books from './DisplayBook'
import ApiWrapper from './ApiWrapper.js';
import Form from './Form.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Books />, document.getElementById('root'));
//registerServiceWorker();

/*var $ = require('jquery')
$.ajaxSetup({
  async: false
});

var results = ApiWrapper.makeCall("portraits--georgia")
console.log(results)
ReactDOM.render(<App />, document.getElementById('root'));*/

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();


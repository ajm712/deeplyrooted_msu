import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form.js';
import TextBox from './TextBox.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('dropbox')); //Displays the dropdownbox
ReactDOM.render(<App />, document.getElementById('header')); //Displays the spinning react label
ReactDOM.render(<TextBox selection="Subject"/>, document.getElementById('text-box')); //Displays the defualt textbox  
registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiWrapper from './ApiWrapper.js';

var results = ApiWrapper.makeCall({language:"english", subject:"cooking"})
console.log(results)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Books from './DisplayBook'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Books />, document.getElementById('root'));
registerServiceWorker();

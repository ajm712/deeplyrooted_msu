import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiWrapper from './ApiWrapper.js';

var url = "https://api.dp.la/v2/items?sourceResource.description=%22deeply+rooted%22&api_key=304ebe4fa961241e648edf1035166735"
ApiWrapper.makeCall(url)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

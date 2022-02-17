import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';
import './css/index.css'
import axios from 'axios';

axios.defaults.baseURL = 'https://site1.public.nqo.me';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Axios  from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

Axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

export const ElearningAxios = 'http://localhost:5001'


root.render(
  <React.StrictMode>
    <Router >
      <App />
    </Router>  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

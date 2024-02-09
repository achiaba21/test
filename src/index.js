import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importez BrowserRouter
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



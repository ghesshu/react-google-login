import React from 'react';
import ReactDOM from 'react-dom/client';

// Wrapping the entire code into a router
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router >
    <App />
  </Router>
);



// ReactDom.render(
//     <Router>
//         <App />
//     </Router>,
//  document.getElementById('root'));
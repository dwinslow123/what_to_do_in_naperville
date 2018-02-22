import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BusinessDetails from './components/BusinessDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={ App } />
      <Route path="/business" component={ BusinessDetails } />
    </div>
  </Router>,
document.getElementById('root'));


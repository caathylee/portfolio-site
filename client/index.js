import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import App from './components/App';
import Landing from './components/Landing';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Router, Route, browserHistory } from 'react-router'
 
require('./assets/styles/app.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/portfolio" component={Landing}/>
    <Route path="/about" component={Bio}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/contact" component={Contact}/>
  </Router>
), document.getElementById('app'));
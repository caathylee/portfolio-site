import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import App from './components/App';
import Landing from './components/Landing';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Web from './components/Web';
import SocialMedia from './components/SocialMedia';
import Print from './components/Print';
import CodingProjects from './components/CodingProjects';
import { Router, Route, browserHistory } from 'react-router';
 
require('./assets/styles/app.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/portfolio" component={App}/>
    <Route path="/about" component={Bio}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/web" component={Web}/>
    <Route path="/socialmedia" component={SocialMedia}/>
    <Route path="/print" component={Print}/>
    <Route path="/codingprojects" component={CodingProjects}/>
  </Router>
), document.getElementById('app'));
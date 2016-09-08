import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import Landing from './Landing';
import Bio from './Bio';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div id="navbar-content" className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="http://cathyhsianglee.com/"><img id="logo" src="assets/images/cl-logo.png" /></a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><a className="current-page" href="/portfolio">PORTFOLIO</a></li>
                  <li><a href="/about">ABOUT</a></li>
                  <li><a href="/resume">RESUME</a></li>
                  <li><a href="/contact">CONTACT</a></li>
                </ul>
              </div>
            </div>
        </div>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;

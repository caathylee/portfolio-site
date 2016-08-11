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
        <NavBar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;

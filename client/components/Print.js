import React, { Component } from 'react';
import NavBar from './NavBar';

class Print extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="print">
        <NavBar />
        <div className="portfolio-navbar">
          <ul className="portfolio-navbar">
            <li className="unselected"><a href="/portfolio">HOME</a></li>
            <li className="unselected"><a href="/web">WEB</a></li>
            <li className="unselected"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="current-subcategory"><a href="/print">PRINT</a></li>
            <li className="unselected"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>

        <h1>THIS IS PRINT SECTION</h1>
      </div>
    );
  }
}

export default Print;

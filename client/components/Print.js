import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

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
            <li className="red-background"><a href="/portfolio">HOME</a></li>
            <li className="red-background"><a href="/web">WEB</a></li>
            <li className="red-background"><a href="/socialmedia">SOCIAL MEDIA</a></li>
            <li className="current-subcategory"><a href="/print">PRINT</a></li>
            <li className="red-background"><a href="/codingprojects">CODING PROJECTS</a></li>
          </ul>
        </div>
        <div id="print-content">
          <h1 className="print-header">Print Work</h1>
          <p className="print-headline">Below are some print work done in Adobe Photoshop and Illustrator for companies I worked at.</p>

          <h3 className="print-category">Business Cards</h3>
          <div>
            <img className="print-mockups"src="assets/images/itepbusinesscardmockup.png" />
          </div>
          <div>
            <img className="print-mockups"src="assets/images/dmwbusinesscardmockup.png" />
          </div>
          <h3 className="print-category">Posters and Banners</h3>
          <div>
            <img className="print-mockups"src="assets/images/pvc-search-engine-poster-mockup.png" />
          </div>
          <div>
            <img className="print-mockups"src="assets/images/pvc-bda-poster-mockup.png" />
          </div>
          <div>
            <img className="print-mockups"src="assets/images/pvc-google-search-engine-mockup.png" />
          </div>
          <div className="last-print-section">
            <img className="print-mockups"src="assets/images/pvc-horizontal-poster-mockup.png" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Print;

import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="landing">
        <h2 id="tagline-header" className="center">Welcome</h2>
        <p id="tagline" className="center">Cathy Lee is a design-savvy web developer living in Los Angeles.</p>
        <div className="row">
          <div className="col-xs-6 col-sm-3 center">
            <img
              className="landing-icons"
              src="assets/images/web-icon.png"
            /><div className="icon-caption">Web</div>
          </div>
          <div className="col-xs-6 col-sm-3 center">
            <img
              className="landing-icons"
              src="assets/images/social-media-icon.png"
            /><div className="icon-caption">Social Media</div>
          </div>
          <div className="clearfix visible-xs-block"></div>

          <div className="col-xs-6 col-sm-3 center">
            <img
              className="landing-icons"
              src="assets/images/print-icon.png"
            /><div className="icon-caption">Print</div>
          </div>
          <div className="col-xs-6 col-sm-3 center">
            <img
              className="landing-icons"
              src="assets/images/coding-icon.png"
            /><div className="icon-caption">Coding Projects</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

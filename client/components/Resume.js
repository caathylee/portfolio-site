import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="resume">
        <NavBar />
        <div id="resume-content">
          <div className="row">
            <div className="col-md-4">
              <div id="technical-skills-section">
                <h4 className="list-heading baby-blue">TECHNICAL SKILLS</h4>
                <ul className="left-column-list">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>jQuery</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Git</li>
                  <li>MongoDB</li>
                  <li>mySQL</li>
                  <li>Postgres</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                </ul>
              </div>
              <div id="experience-section">
                <div className="side-section">
                  <h4 className="list-heading baby-blue">EDUCATION</h4>
                    <h5 className="school-name">Hack Reactor</h5>
                      <ul className="left-column-list">
                        <li className="dark-gray">2016</li>
                        <li>Advanced Software Engineer Immersive Program</li>
                        <li className="italic">San Francisco, CA</li>
                      </ul>
                    <h5 className="school-name">University of California, San Diego</h5>
                      <ul className="left-column-list">
                        <li className="dark-gray">SEPT 2010 - DEC 2013</li>
                        <li>International Studies - Economics & Communications</li>
                        <li>Chinese Studies Minor</li>
                      </ul>
                    <h5 className="school-name">Chinese University of Hong Kong</h5>
                      <ul className="left-column-list">
                        <li className="dark-gray">AUG 2013 - DEC 2013</li>
                        <li>UC Education Abroad Program</li>
                      </ul>
                </div>
                <div className="side-section">
                  <h4 className="list-heading baby-blue">LANGUAGES</h4>
                    <ul className="left-column-list">
                      <li>English</li>
                      <li>Mandarin Chinese conversational</li>
                    </ul>
                </div>
                <div className="side-section">
                  <h4 className="list-heading baby-blue">PERSONAL INTERESTS</h4>
                    <p>I enjoy cooking, spin class, playing video games & board games, hiking with my dog <a className="resume-links" href="http://instagram.com/pudgethemightycorgi">@pudgethemightycorgi</a>, and attending the occasional nerdy convention.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="side-section">
                <h4 className="list-heading baby-blue">PROJECTS</h4>
                <h5 className="list-sub-heading"><span className="bold">ShareCrow |</span> <span className="light">Software Engineer |</span> <a className="resume-links" href="http://sharecrow.org/">sharecrow.org</a></h5>
                <p className="project-description">Digital marketplace for users to rent and lend out items with payment security.</p>
                <ul className="experience-bullets">
                  <li>Designed and implemented integral marketplace and user account React views and data visualization components</li>
                  <li>Created an intuitive and seamless UX design through implementation of SASS, Bootstrap, and React</li>
                  <li>Framed complex relational schema interactions using PostgresSQL to facilitate user connections
                  </li>
                </ul>

                <h5 className="list-sub-heading">Memowise | <span className="light">Software Engineer</span></h5>
                <p className="project-description">A customizable gamified flash card application.</p>
                <ul className="experience-bullets">
                  <li>Integrated Facebook OAuth using Passport </li>
                  <li>Designed and built a responsive UI with Material Design</li>
                  <li>Integrated a gamification component to extend long-term usage to achieve competitive drive for users</li>
                </ul>

                <h5 className="list-sub-heading">Read with Me | <span className="light">Software Engineer</span></h5>
                <p className="project-description">Application that enables parents to read interactively with children remotely.</p>
                <ul className="experience-bullets">
                  <li>Utilized web sockets for synchornization between clients</li>
                  <li>Established web functionality using Twilio API</li>
                  <li>Designed and implemented styling using CSS3</li>
                </ul>

                <h5 className="list-sub-heading">TsumTsum Typing | <span className="light">Software Engineer</span></h5>
                <p className="project-description">Application that delivers a playful approach to typing practice.</p>
                <ul className="experience-bullets">
                  <li>Utilized Angular's two-binding for real time feedback and and immersive user experience</li>
                  <li>Implemented MongoDB for rapid prototyping with schema design and variable sized data entries</li>
                </ul>
              </div>

              <div className="side-section">
                <h4 className="list-heading baby-blue">WORK EXPERIENCE</h4>
                  <h5 className="list-sub-heading">PolyVirtual Corporation | <span className="light">Marketing & Web Contractor</span></h5>
                  <p className="dark-gray">APRIL 2015 - DEC 2015</p>
                  <p>Burbank</p>
                    <ul className="experience-bullets">
                      <li>Designed and coded company website using HTML, CSS, JavaScript and PHP</li>
                      <li>Created HTML email blasts and posters for Mobile World Congress trade show of over 93,000 attendees to attract people to company booth and intorduce product/company</li>
                    </ul>
                  <h5 className="list-sub-heading">Digital Media Wire | <span className="light">Marketing & Events Assistant</span></h5>
                  <p className="dark-gray">SEPT 2014 - MAY 2015</p>
                  <p>Los Angeles, CA</p>
                  <ul className="experience-bullets">
                    <li>Launched Facebook Advertising campaign for LA Games Conference with $600 budget to drive traffic to event website and reach 30,000 ad clicks in target market within 1.5 months</li>
                    <li>Created successful marketing campaign for Limelight client's webinar for 2 weeks through email blasts/social media with 5% conversion rate</li>
                    <li>Reduced company overhead cost by $500/month by implementing efficient methods of generating current digital media news for daily newsletter</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;

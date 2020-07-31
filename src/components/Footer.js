////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { version } from '../../package.json';

import res_pdf from '../resources/EricPowell_Resume_Web.pdf';
import img_logo from '../images/vectors/ep_logo_main.svg';
import img_github from '../images/vectors/github.svg';
import img_linkedin from '../images/vectors/linkedin.svg';
import img_artstation from '../images/vectors/artstation.svg';
import img_facebook from '../images/vectors/facebook.svg';
import img_instagram from '../images/vectors/instagram.svg';

////////// COMPONENT //////////
export default function Footer(props) {
  const links = [
    "https://github.com/ericpowelldev?tab=repositories",
    "https://www.linkedin.com/in/ericpowelldev/",
    "https://www.artstation.com/ericpowell",
    "https://www.facebook.com/ericpowelldev",
    "https://www.instagram.com/ericpowelldev/"
  ];

  return (<>
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-3 footer-links-logo">
          <a href={res_pdf} target="_blank" rel="noopener noreferrer">
            <img className="footer-3-logo" src={img_logo} alt="Logo" />
          </a>
        </div>
        <div className="footer-3 footer-links-site">
          <h3 className="footer-3-head">Site&nbsp;Links</h3>
          <Link to="/"><h4 className="footer-3-link">Profile</h4></Link>
          <Link to="/work"><h4 className="footer-3-link">Work</h4></Link>
          <Link to="/contact"><h4 className="footer-3-link">Contact</h4></Link>
          <a href={res_pdf} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">Resume</h4></a>
        </div>
        <div className="footer-3 footer-links-aux">
          <h3 className="footer-3-head">Auxilary&nbsp;Links</h3>
          <div className="footer-touch">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img className="footer-touch-icon" src={img_github} alt="GitHub" />
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img className="footer-touch-icon" src={img_linkedin} alt="LinkedIn" />
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img className="footer-touch-icon" src={img_artstation} alt="ArtStation" />
            </a>
            <a href={links[3]} target="_blank" rel="noopener noreferrer">
              <img className="footer-touch-icon" src={img_facebook} alt="Facebook" />
            </a>
            <a href={links[4]} target="_blank" rel="noopener noreferrer">
              <img className="footer-touch-icon" src={img_instagram} alt="Instagram" />
            </a>
          </div>
          <a href={links[0]} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">GitHub</h4></a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">LinkedIn</h4></a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">ArtStation</h4></a>
          <a href={links[3]} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">Facebook</h4></a>
          <a href={links[4]} target="_blank" rel="noopener noreferrer"><h4 className="footer-3-link">Instagram</h4></a>
        </div>
      </div>
      <div className="footer-bottom">
        <h5 className="footer-bottom-txt">&copy;{moment().format(`YYYY`)}&nbsp;Eric&nbsp;Powell&nbsp;&nbsp;-&nbsp;&nbsp;<Link to="/changelog" className="footer-change">Changelog&nbsp;(v{version})</Link></h5>
      </div>
    </footer>
  </>)
}
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { version } from '../../package.json';
// import Global from '../Global';

export default function Footer() {
  // const ctx = React.useContext(Global);

  const links = [
    "https://github.com/ericpowell3d?tab=repositories",
    "https://www.linkedin.com/in/epowell3d/",
    "https://www.artstation.com/epowell3d",
    "https://www.facebook.com/epowell3d",
    "https://www.instagram.com/epowell3d/"
  ];

  return (<>
    <footer>
      <div id="footerTop">
        <div className="footer3rd" id="footerLogoLink">
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer">
            <img id="footerLogo" src="/images/vectors/vLogo.svg" alt="Logo" />
          </a>
        </div>
        <div className="footer3rd" id="footerSiteLinks">
          <h2>Site&nbsp;Links</h2>
          <Link to="/"><h3>Profile</h3></Link>
          <Link to="/work"><h3>Work</h3></Link>
          <Link to="/contact"><h3>Contact</h3></Link>
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer"><h3>Resume</h3></a>
        </div>
        <div className="footer3rd" id="footerAuxLinks">
          <h2>Auxilary&nbsp;Links</h2>
          <div id="footerAuxIcons">
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img className="footerAuxIcon" src="/images/vectors/vGh.svg" alt="GitHub" />
            </a>
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img className="footerAuxIcon" src="/images/vectors/vLi.svg" alt="LinkedIn" />
            </a>
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img className="footerAuxIcon" src="/images/vectors/vAs.svg" alt="ArtStation" />
            </a>
            <a href={links[3]} target="_blank" rel="noopener noreferrer">
              <img className="footerAuxIcon" src="/images/vectors/vFb.svg" alt="Facebook" />
            </a>
            <a href={links[4]} target="_blank" rel="noopener noreferrer">
              <img className="footerAuxIcon" src="/images/vectors/vIg.svg" alt="Instagram" />
            </a>
          </div>
          <a href={links[0]} target="_blank" rel="noopener noreferrer"><h3>GitHub</h3></a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer"><h3>LinkedIn</h3></a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer"><h3>ArtStation</h3></a>
          <a href={links[3]} target="_blank" rel="noopener noreferrer"><h3>Facebook</h3></a>
          <a href={links[4]} target="_blank" rel="noopener noreferrer"><h3>Instagram</h3></a>
        </div>
      </div>
      <div id="footerBottom">
        <h4>&copy;{moment().format(`YYYY`)}&nbsp;Eric&nbsp;Powell&nbsp;&nbsp;-&nbsp;&nbsp;<Link to="/changelog" id="footerChange">Changelog&nbsp;(v{version})</Link></h4>
      </div>
    </footer>
  </>)
}
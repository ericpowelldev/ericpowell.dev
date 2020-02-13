import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { version } from '../../package.json';
// import Global from '../Global';

export default function Footer() {
  // const g = React.useContext(Global);

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
        <br />
        <div className="footer3rd" id="footerLogoLink">
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer">
            <img id="footerLogo" src="/images/vectors/vLogo.svg" alt="Logo" />
          </a>
        </div>
        <div className="footer3rd" id="footerSiteLinks">
          <h1>Site&nbsp;Links</h1>
          <Link to="/"><h2>Profile</h2></Link>
          <Link to="/work"><h2>Work</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer"><h2>Resume</h2></a>
        </div>
        <div className="footer3rd" id="footerAuxLinks">
          <h1>Auxilary&nbsp;Links</h1>
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
          <a href={links[0]} target="_blank" rel="noopener noreferrer"><h2>GitHub</h2></a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer"><h2>LinkedIn</h2></a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer"><h2>ArtStation</h2></a>
          <a href={links[3]} target="_blank" rel="noopener noreferrer"><h2>Facebook</h2></a>
          <a href={links[4]} target="_blank" rel="noopener noreferrer"><h2>Instagram</h2></a>
        </div>
      </div>
      <div id="footerBottom">
        <h3>&copy;{moment().format(`YYYY`)}&nbsp;Eric&nbsp;Powell&nbsp;&nbsp;-&nbsp;&nbsp;<Link to="/changelog" id="footerChange">Changelog&nbsp;(v{version})</Link></h3>
      </div>
    </footer>
  </>)
}
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Footer() {

  return (<>
    <footer>
      <div id="footerTop">
        <br />
        <div className="footerFix">
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
              <a href="https://github.com/ericpowell3d?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img className="footerAuxIcon" src="/images/vectors/vGh.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/epowell3d/" target="_blank" rel="noopener noreferrer">
                <img className="footerAuxIcon" src="/images/vectors/vLi.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.artstation.com/epowell3d" target="_blank" rel="noopener noreferrer">
                <img className="footerAuxIcon" src="/images/vectors/vAs.svg" alt="ArtStation" />
              </a>
              <a href="https://www.facebook.com/epowell3d" target="_blank" rel="noopener noreferrer">
                <img className="footerAuxIcon" src="/images/vectors/vFb.svg" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/epowell3d/" target="_blank" rel="noopener noreferrer">
                <img className="footerAuxIcon" src="/images/vectors/vIg.svg" alt="Instagram" />
              </a>
            </div>
            <a href="https://github.com/ericpowell3d?tab=repositories" target="_blank" rel="noopener noreferrer"><h2>GitHub</h2></a>
            <a href="https://www.linkedin.com/in/epowell3d/" target="_blank" rel="noopener noreferrer"><h2>LinkedIn</h2></a>
            <a href="https://www.artstation.com/epowell3d" target="_blank" rel="noopener noreferrer"><h2>ArtStation</h2></a>
            <a href="https://www.facebook.com/epowell3d" target="_blank" rel="noopener noreferrer"><h2>Facebook</h2></a>
            <a href="https://www.instagram.com/epowell3d/" target="_blank" rel="noopener noreferrer"><h2>Instagram</h2></a>
          </div>
        </div>
      </div>
      <div id="footerBottom">
        <div className="footerFix">
          <h3>&copy;{moment().format(`YYYY`)}&nbsp;Eric&nbsp;Powell</h3>
        </div>
      </div>
    </footer>
  </>)
}
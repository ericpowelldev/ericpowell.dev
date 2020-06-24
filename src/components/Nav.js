import React from 'react';
import { Link } from 'react-router-dom';
import { Global } from '../utils/Global';

export default function Nav() {
  const { page } = React.useContext(Global);

  const [nav, setNav] = React.useState(`navShow`);

  let prev = window.pageYOffset;
  window.onscroll = () => {
    if (window.screen.width <= 1600 && window.screen.height <= 1024) {
      let cur = window.pageYOffset;
      if (prev > cur) setNav(`navShow`);
      else setNav(`navHide`);
      prev = cur;
    }
    else setNav(`navShow`);
  }

  return (<>
    <nav>
      <div id={nav}>
        <div id="navShape" />
        <div id="navL">
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer">
            <img id="navLogo" src="/images/vectors/vLogo.svg" alt="Eric Powell (Logo)" />
          </a>
          <img id="navName" src="/images/vectors/vName.svg" alt="Eric Powell (Name)" />
        </div>
        <div id="navR">
          <Link to="/"><div className={page === `profile` ? "navBtnActive" : "navBtn"}><h3>PROFILE</h3></div></Link>
          <Link to="/work"><div className={page === `work` ? "navBtnActive" : "navBtn"}><h3>WORK</h3></div></Link>
          <Link to="/contact"><div className={page === `contact` ? "navBtnActive" : "navBtn"}><h3>CONTACT</h3></div></Link>
        </div>
        <span id="navIcons">
          <Link to="/"><img className={page === `profile` ? "navIcon navIconActive" : "navIcon"} src="/images/vectors/vProfile.svg" alt="Profile" /></Link>
          <Link to="/work"><img className={page === `work` ? "navIcon navIconActive" : "navIcon"} src="/images/vectors/vWork.svg" alt="Work" /></Link>
          <Link to="/contact"><img className={page === `contact` ? "navIcon navIconActive" : "navIcon"} src="/images/vectors/vContact.svg" alt="Contact" /></Link>
        </span>
      </div>
    </nav>
  </>)
}
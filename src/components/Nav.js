import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  const { page, setPage } = props;

  return (<>
    <nav>
      <div id="navFix">
        <div id="navShape"></div>
        <div id="navL">
          <a href="/resources/EricPowell_Resume_Web.pdf" target="_blank" rel="noopener noreferrer">
            <img id="navLogo" src="/images/vectors/vLogo.svg" alt="Eric Powell (Logo)" />
          </a>
          <img id="navName" src="/images/vectors/vName.svg" alt="Eric Powell (Name)" />
        </div>
        <div id="navR">
          <Link to="/"><div className={page === 0 ? "navBtn navBtnActive" : "navBtn"} onClick={() => setPage(0)}><h1>PROFILE</h1></div></Link>
          <Link to="/work"><div className={page === 1 ? "navBtn navBtnActive" : "navBtn"} onClick={() => setPage(1)}><h1>WORK</h1></div></Link>
          <Link to="/contact"><div className={page === 2 ? "navBtn navBtnActive" : "navBtn"} onClick={() => setPage(2)}><h1>CONTACT</h1></div></Link>
        </div>
        <div id="navIcons">
          <Link to="/"><img className={page === 0 ? "navIcon navIconActive" : "navIcon"} onClick={() => setPage(0)} src="/images/vectors/vProfile.svg" alt="Profile" /></Link>
          <Link to="/work"><img className={page === 1 ? "navIcon navIconActive" : "navIcon"} onClick={() => setPage(1)} src="/images/vectors/vWork.svg" alt="Work" /></Link>
          <Link to="/contact"><img className={page === 2 ? "navIcon navIconActive" : "navIcon"} onClick={() => setPage(2)} src="/images/vectors/vContact.svg" alt="Contact" /></Link>
        </div>
      </div>
    </nav>
  </>)
}
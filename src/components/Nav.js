////////// DEPENDENCIES //////////
import React from "react";
import { Link } from "react-router-dom";
import { Global } from "../utils/Global";

import res_pdf from "../resources/EricPowell_Resume_Web.pdf";
import img_logo from "../images/vectors/ep_logo_main.svg";
import img_name from "../images/vectors/ep_txt_alt.svg";
import img_profile from "../images/vectors/profile.svg";
import img_work from "../images/vectors/work.svg";
import img_contact from "../images/vectors/contact.svg";

////////// COMPONENT //////////
export default function Nav(props) {
  const { page } = React.useContext(Global);

  const [nav, setNav] = React.useState(`nav-show`);

  let prev = window.pageYOffset;
  window.onscroll = () => {
    if (window.screen.width <= 1600 && window.screen.height <= 1024) {
      let cur = window.pageYOffset;
      if (prev > cur) setNav(`nav-show`);
      else setNav(`nav-hide`);
      prev = cur;
    } else setNav(`nav-show`);
  };

  return (
    <>
      <nav id="nav">
        <div className={nav}>
          <div className="nav-shape" />
          <div className="nav-left">
            <a href={res_pdf} target="_blank" rel="noopener noreferrer">
              <img className="nav-left-logo" src={img_logo} alt="Eric Powell (Logo)" />
            </a>
            <img className="nav-left-name" src={img_name} alt="Eric Powell (Name)" />
          </div>
          <div className="nav-right">
            <Link to="/">
              <div className={page === `profile` ? `nav-right-btn-active` : `nav-right-btn`}>
                <h4>PROFILE</h4>
              </div>
            </Link>
            <Link to="/work">
              <div className={page === `work` ? `nav-right-btn-active` : `nav-right-btn`}>
                <h4>WORK</h4>
              </div>
            </Link>
            <Link to="/contact">
              <div className={page === `contact` ? `nav-right-btn-active` : `nav-right-btn`}>
                <h4>CONTACT</h4>
              </div>
            </Link>
          </div>
          <span className="nav-touch">
            <Link to="/">
              <img
                className={page === `profile` ? `nav-touch-icon nav-touch-icon-active` : `nav-touch-icon`}
                src={img_profile}
                alt="Profile"
              />
            </Link>
            <Link to="/work">
              <img
                className={page === `work` ? `nav-touch-icon nav-touch-icon-active` : `nav-touch-icon`}
                src={img_work}
                alt="Work"
              />
            </Link>
            <Link to="/contact">
              <img
                className={page === `contact` ? `nav-touch-icon nav-touch-icon-active` : `nav-touch-icon`}
                src={img_contact}
                alt="Contact"
              />
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
}

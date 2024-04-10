// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { Link } from "react-router-dom";

import { Global } from "../providers/Global";

import res_pdf from "../static/resources/EricPowell_Resume_Web.pdf";
import img_logo from "../static/images/vectors/ep-logo-main.svg";
import img_name from "../static/images/vectors/ep-text-alt.svg";
import img_profile from "../static/images/vectors/profile.svg";
import img_work from "../static/images/vectors/work.svg";
import img_contact from "../static/images/vectors/contact.svg";

// -------------------------------- COMPONENT -------------------------------- //

export default function Header(props) {
  const { page } = React.useContext(Global);

  const [header, setHeader] = React.useState(`header-show`);

  let prev = window.pageYOffset;
  window.onscroll = () => {
    if (window.screen.width <= 1600 && window.screen.height <= 1024) {
      let cur = window.pageYOffset;
      if (prev > cur) setHeader(`header-show`);
      else setHeader(`header-hide`);
      prev = cur;
    } else setHeader(`header-show`);
  };

  return (
    <header id="header">
      <div className={header}>
        <div className="header-shape" />

        <div className="header-left">
          <a href={res_pdf} target="_blank" rel="noopener noreferrer">
            <img className="header-left-logo" src={img_logo} alt="Eric Powell (Logo)" />
          </a>
          <img className="header-left-name" src={img_name} alt="Eric Powell (Name)" />
        </div>

        <div className="header-right">
          <Link to="/">
            <div className={page === `profile` ? `header-right-btn-active` : `header-right-btn`}>
              <h4>PROFILE</h4>
            </div>
          </Link>

          <Link to="/work">
            <div className={page === `work` ? `header-right-btn-active` : `header-right-btn`}>
              <h4>WORK</h4>
            </div>
          </Link>

          <Link to="/contact">
            <div className={page === `contact` ? `header-right-btn-active` : `header-right-btn`}>
              <h4>CONTACT</h4>
            </div>
          </Link>
        </div>

        <span className="header-touch">
          <Link to="/">
            <img
              className={page === `profile` ? `header-touch-icon header-touch-icon-active` : `header-touch-icon`}
              src={img_profile}
              alt="Profile"
            />
          </Link>

          <Link to="/work">
            <img
              className={page === `work` ? `header-touch-icon header-touch-icon-active` : `header-touch-icon`}
              src={img_work}
              alt="Work"
            />
          </Link>

          <Link to="/contact">
            <img
              className={page === `contact` ? `header-touch-icon header-touch-icon-active` : `header-touch-icon`}
              src={img_contact}
              alt="Contact"
            />
          </Link>
        </span>
      </div>
    </header>
  );
}

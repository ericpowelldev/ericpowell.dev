////////// DEPENDENCIES //////////
import React from "react";
import { Global } from "../utils/Global";

import ProfileReel from "../components/profile/ProfileReel";
import ProfilePortfolio from "../components/profile/ProfilePortfolio";
// import ProfileCapabilities from '../components/profile/ProfileCapabilities';
import ProfileAbout from "../components/profile/ProfileAbout";

import img_text from "../images/vectors/ep_txt_light.svg";

////////// COMPONENT //////////
export default function Profile(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => {
    checkPage();
  });

  return (
    <>
      <main id="profile">
        <section id="profile-name-section">
          <div className="profile-name">
            <img className="profile-name-logo" src={img_text} alt="Eric Powell" />
          </div>
        </section>
        <section id="profile-reel-section">
          <ProfileReel />
        </section>
        <section id="profile-portfolio-section">
          <h2 className="title">Survey&nbsp;my&nbsp;portfolio.</h2>
          <ProfilePortfolio />
        </section>
        {/* <div style={{ width: "100%", height: "64px" }} />
        <section id="profile-capabilities">
          <ProfileCapabilities />
        </section> */}
        <section id="profile-about-section">
          <h2 className="title">Learn&nbsp;a&nbsp;little&nbsp;more&nbsp;about&nbsp;me.</h2>
          <ProfileAbout />
        </section>
      </main>
    </>
  );
}

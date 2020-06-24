import React from 'react';
import { Global } from '../utils/Global';

import ProfileReel from '../components/profile/ProfileReel';
import ProfilePortfolio from '../components/profile/ProfilePortfolio';
import ProfileAbout from '../components/profile/ProfileAbout';
// import ProfileCapabilities from '../components/profile/ProfileCapabilities';

export default function Profile() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="profile">
      <section id="profile-reel">
        <div id="profileName">
          <img id="profileNameLogo" src="/images/vectors/vText.svg" alt="Eric Powell" />
        </div>
        <ProfileReel />
      </section>
      <section id="profile-portfolio">
        <h1 className="title">Survey&nbsp;my&nbsp;portfolio.</h1>
        <ProfilePortfolio />
      </section>
      {/* <div style={{ width: "100%", height: "64px" }} />
      <section id="profile-capabilities">
        <ProfileCapabilities />
      </section> */}
      <section id="profile-about">
        <h1 className="title">Learn&nbsp;a&nbsp;little&nbsp;more&nbsp;about&nbsp;me.</h1>
        <ProfileAbout />
      </section>
    </main>
  </>)
}
import React from 'react';
import Global from '../Global';

import PR from '../components/ProfileReel';
import PP from '../components/ProfilePortfolio';
// import PC from '../components/ProfileCapabilities';
import PA from '../components/ProfileAbout';

export default function Profile() {
  const g = React.useContext(Global);
  React.useEffect(() => { g.checkPage(); });

  return (<>
    <main id="profile">
      <section id="profile-reel">
        <div id="profileName">
          <img id="profileNameLogo" src="/images/vectors/vText.svg" alt="Eric Powell" />
        </div>
        <PR />
      </section>
      <section id="profile-portfolio">
        <h1 className="title">Survey&nbsp;my&nbsp;portfolio.</h1>
        <PP />
      </section>
      <section id="profile-capabilities">
        {/* <h1 className="title">See&nbsp;what&nbsp;I'm&nbsp;capable&nbsp;of.</h1>
            <PC /> */}
      </section>
      <section id="profile-about">
        <h1 className="title">Learn&nbsp;a&nbsp;little&nbsp;more&nbsp;about&nbsp;me.</h1>
        <PA />
      </section>
    </main>
  </>)
}
import React from 'react';
import PR from '../components/ProfileReel';
import PP from '../components/ProfilePortfolio';
// import PC from '../components/ProfileCapabilities';
import PA from '../components/ProfileAbout';

export default function Profile(props) {

  const { setPage } = props;

  return (
    <div id="profile">
      <div id="profileName">
        <img id="profileNameLogo" src="/images/vectors/vText.svg" alt="Eric Powell" />
      </div>
      <PR />
      <h1 className="title">Survey&nbsp;my&nbsp;portfolio.</h1>
      <PP setPage={setPage} />
      {/* <h1 className="title">See&nbsp;what&nbsp;I'm&nbsp;capable&nbsp;of.</h1>
            <PC /> */}
      <h1 className="title">Learn&nbsp;a&nbsp;little&nbsp;more&nbsp;about&nbsp;me.</h1>
      <PA />
    </div>
  )
}
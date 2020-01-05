import React from 'react';
import WR from '../components/WorkReel';
import WW from '../components/WorkWeb';

export default function Work(props) {

  // const { setPage } = props;

  return (<>
    <div id="work">
      <h1 className="title">Game&nbsp;Reel</h1>
      <WR />
      <h1 className="title">Web&nbsp;Development&nbsp;Projects</h1>
      <WW />
    </div>
  </>)
}
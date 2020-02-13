import React from 'react';
import Global from '../Global';

import WR from '../components/WorkReel';
import WW from '../components/WorkWeb';

export default function Work() {
  const g = React.useContext(Global);
  React.useEffect(() => { g.checkPage(); });

  return (<>
    <main id="work">
      <section id="work-reel">
        <h1 className="title">Game&nbsp;Reel</h1>
        <WR />
      </section>
      <section id="work-web">
        <h1 className="title">Web&nbsp;Development&nbsp;Projects</h1>
        <WW />
      </section>
    </main>
  </>)
}
import React from 'react';
import { GlobalContext } from '../GlobalContext';

import WorkReel from '../components/WorkReel';
import WorkWeb from '../components/WorkWeb';

export default function Work() {
  const g = React.useContext(GlobalContext);
  React.useEffect(() => { g.checkPage(); });

  return (<>
    <main id="work">
      <section id="work-reel">
        <h1 className="title">Game&nbsp;Reel</h1>
        <WorkReel />
      </section>
      <section id="work-web">
        <h1 className="title">Web&nbsp;Development&nbsp;Projects</h1>
        <WorkWeb />
      </section>
    </main>
  </>)
}
import React from 'react';
import { Global } from '../utils/Global';

import WorkReel from '../components/work/WorkReel';
import WorkWeb from '../components/work/WorkWeb';

export default function Work() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

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
import React from 'react';
import { Global } from '../utils/Global';

import WorkReel from '../components/work/WorkReel';
import WorkWeb from '../components/work/WorkWeb';

export default function Work() {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="work">
      <section id="work-web">
        <h1 className="title">Web&nbsp;Development&nbsp;Projects</h1>
        <WorkWeb />
      </section>
      <section id="work-game">
        <h1 className="title">Game&nbsp;Reel</h1>
        <WorkReel src="/videos/reel_game.mp4" />
      </section>
      {/* <section id="work-2d">
        <h1 className="title">Design&nbsp;Reel</h1>
        <WorkReel src="/videos/reel_2d.mp4" />
      </section>
      <section id="work-3d">
        <h1 className="title">3D&nbsp;Reel</h1>
        <WorkReel src="/videos/reel_3d.mp4" />
      </section> */}
    </main>
  </>)
}
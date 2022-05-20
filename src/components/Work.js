////////// DEPENDENCIES //////////
import React from "react";
import { Global } from "../utils/Global";

import WorkReel from "../components/work/WorkReel";
import WorkWeb from "../components/work/WorkWeb";

import reel_game from "../videos/reel_game.mp4";
// import reel_2d from '../videos/reel_2d.mp4';
// import reel_3d from '../videos/reel_3d.mp4';

////////// COMPONENT //////////
export default function Work(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => {
    checkPage();
  });

  return (
    <>
      <main id="work">
        <section id="work-web-section">
          <h2 className="title">Web&nbsp;Development&nbsp;Projects</h2>
          <WorkWeb />
        </section>
        <section id="work-game-section">
          <h2 className="title">Game&nbsp;Reel</h2>
          <WorkReel src={reel_game} />
        </section>
        {/* <section id="work-2d-section">
          <h2 className="title">Design&nbsp;Reel</h2>
          <WorkReel src={reel_2d} />
        </section>
        <section id="work-3d-section">
          <h2 className="title">3D&nbsp;Reel</h2>
          <WorkReel src={reel_3d} />
        </section> */}
      </main>
    </>
  );
}

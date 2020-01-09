import React from 'react';
import WR from '../components/WorkReel';
import WW from '../components/WorkWeb';

export default function Work(props) {

  const { checkPage } = props
  React.useEffect(() => { checkPage(); });

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
////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

////////// COMPONENT //////////
export default function Project(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="project">
      <section id="project-section">

      </section>
    </main>
  </>)
}
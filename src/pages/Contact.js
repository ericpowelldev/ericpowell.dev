import React from 'react';
import Global from '../Global';

export default function Contact() {
  const g = React.useContext(Global);
  React.useEffect(() => { g.checkPage(); });

  return (<>
    <main id="contact">
      <section id="contact-form">

      </section>
    </main>
  </>)
}
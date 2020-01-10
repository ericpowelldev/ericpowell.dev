import React from 'react';

export default function Contact(props) {

  const { checkPage } = props
  React.useEffect(() => { checkPage(); });

  return (<>
    <main id="contact">
      <section id="contact-form">

      </section>
    </main>
  </>)
}
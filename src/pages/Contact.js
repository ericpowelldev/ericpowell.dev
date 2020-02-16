import React from 'react';
import { Global } from '../utils/Global';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const ctx = React.useContext(Global);
  React.useEffect(() => { ctx.checkPage(); });

  return (<>
    <main id="contact">
      <section id="contact-form">
        <h1 className="title">Send&nbsp;me&nbsp;an&nbsp;email.</h1>
        <ContactForm />
      </section>
    </main>
  </>)
}
// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";

import { Global } from "../providers/Global";

import ContactForm from "../components/contact/ContactForm";

// -------------------------------- COMPONENT -------------------------------- //

export default function Contact(props) {
  const { checkPage } = React.useContext(Global);

  React.useEffect(() => {
    checkPage();
  });

  return (
    <main id="contact">
      <section id="contact-form-section">
        <h2 className="title">Send&nbsp;Me&nbsp;An&nbsp;Email</h2>
        <ContactForm />
      </section>
    </main>
  );
}

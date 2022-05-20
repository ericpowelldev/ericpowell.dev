////////// DEPENDENCIES //////////
import React from "react";
import { Global } from "../utils/Global";

import ContactForm from "../components/contact/ContactForm";

////////// COMPONENT //////////
export default function Contact(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => {
    checkPage();
  });

  return (
    <>
      <main id="contact">
        <section id="contact-form-section">
          <h2 className="title">Send&nbsp;me&nbsp;an&nbsp;email.</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}

import React from 'react';
import { NotifyContext } from '../NotifyContext';
import { GlobalContext } from '../GlobalContext';

export default function ContactForm() {
  const n = React.useContext(NotifyContext);
  const g = React.useContext(GlobalContext);

  const [name, setName] = React.useState(``);
  const [email, setEmail] = React.useState(``);
  const [org, setOrg] = React.useState(``);
  const [message, setMessage] = React.useState(``);

  const [valid, setValid] = React.useState(false);

  const handleName = event => {
    setName(event.target.value);
  }
  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handleOrg = event => {
    setOrg(event.target.value);
  }
  const handleMessage = event => {
    setMessage(event.target.value);
  }

  const checkValidation = () => {
    if (name.length >= 3 && email.includes(`@`) && email.includes(`.`) && org.length >= 3 && message.length >= 3) {
      g.log && console.log(`Validation Success!`);
      setValid(true);
    }
    else setValid(false);
  }
  React.useEffect(() => checkValidation());

  const handleSend = () => {
    if (valid) {
      g.log && console.log(`Message Sent!`);
      setName(``);
      setEmail(``);
      setOrg(``);
      setMessage(``);
      n.handleAlert(`success`, `Message was sent successfully!`);
    }
    else {
      g.log && console.log(`Message Was Not Sent!`);
      n.handleAlert(`warning`, `Please fill out all fields and provide valid credentials.`);
      // n.handleAlert(`error`, `Failed to send message. Encountered a network error.`);
    }
  }

  return (<>
    <div id="contactForm">
      <div id="contactFormDrop">
        <div style={{ width: '100%', height: '8px' }} />
        <div id="contactDivWrap">

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-name" value={name} onChange={handleName} type="text" placeholder="Enter your name..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-name">
              <span className="contactDivTitle">Full&nbsp;Name</span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-email" value={email} onChange={handleEmail} type="text" placeholder="Enter your email..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-email">
              <span className="contactDivTitle">Email&nbsp;Address</span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-org" value={org} onChange={handleOrg} type="text" placeholder="Enter your organization..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-org">
              <span className="contactDivTitle">Organization</span>
            </label>
          </div>

        </div>

        <div id="contactMessage">
          <textarea id="contactMessageInput" rows="13" value={message} onChange={handleMessage} placeholder="Enter your message..." autoComplete="off" required />
          <div id="contactSend" className={valid ? `valid` : `invalid`} onClick={handleSend}>SEND&nbsp;MESSAGE</div>
        </div>
      </div>
    </div>
  </>)
}
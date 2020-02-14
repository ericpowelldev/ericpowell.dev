import React from 'react';
import Global from '../Global';

export default function ContactForm() {
  const g = React.useContext(Global);

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

  const handleSend = () => {
    if (valid) {
      g.log && console.log(`Message Sent!`);
    }
    else {
      g.log && console.log(`Message Was Not Sent!`);
    }
  }

  React.useEffect(() => {
    checkValidation();
  }, [name, email, org, message]);

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
          <div id="contactSend" style={{ opacity: valid ? 1 : 0, cursor: valid ? `pointer` : `default` }} onClick={handleSend}>SEND&nbsp;MESSAGE</div>
        </div>
      </div>
    </div>
  </>)
}
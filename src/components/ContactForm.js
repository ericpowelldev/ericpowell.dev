import React from 'react';
import Global from '../Global';
import Notify from '../utils/Notify';

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
  React.useEffect(() => checkValidation());

  const handleSend = () => {
    if (valid) {
      g.log && console.log(`Message Sent!`);
      setName(``);
      setEmail(``);
      setOrg(``);
      setMessage(``);
      !notify1 && handleNotify1();
    }
    else {
      g.log && console.log(`Message Was Not Sent!`);
      !notify2 && handleNotify2();
    }
  }

  ////////////////////////// NOTIFY //////////////////////////
  const [notify1, setNotify1] = React.useState(false);
  const [notify2, setNotify2] = React.useState(false);
  const [notify3, setNotify3] = React.useState(false);
  const handleNotify1 = () => { if (!notify1) setNotify1(true) };
  const handleNotify2 = () => { if (!notify2) setNotify2(true) };
  // const handleNotify3 = () => { if (!notify3) setNotify3(true) };
  ////////////////////////////////////////////////////////////

  return (<>
    {notify3 && <Notify status="error" message="Failed to send message. Encountered a network error." setNotify={setNotify3} />}
    {notify2 && <Notify status="warning" message="Please fill out all fields and provide valid credentials." setNotify={setNotify2} />}
    {notify1 && <Notify status="success" message="Message was sent successfully!" setNotify={setNotify1} />}
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
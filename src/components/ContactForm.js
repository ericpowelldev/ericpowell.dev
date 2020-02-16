import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Notify } from '../utils/Notify';
import { Global } from '../utils/Global';

export default function ContactForm() {
  const recaptchaRef = React.createRef();
  const notify = React.useContext(Notify);
  const ctx = React.useContext(Global);

  const [name, setName] = React.useState(``);
  const [email, setEmail] = React.useState(``);
  const [org, setOrg] = React.useState(``);
  const [message, setMessage] = React.useState(``);

  const [valid, setValid] = React.useState(false);
  const [spam, setSpam] = React.useState(false);

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
    if (name.length >= 1 && email.includes(`@`) && email.includes(`.`) && org.length >= 1 && message.length >= 1) {
      setValid(true);
    }
    else setValid(false);
  }
  React.useEffect(() => checkValidation());

  const handleSend = () => {
    if (valid) {
      if (!spam) {
        ctx.log && console.log(`Message is valid!`);
        recaptchaRef.current.execute();
      }
      else {
        ctx.log && console.log(`Message is spam!`);
        notify(`Failed to send message. Please do not spam my email.`, `error`);
      }
    }
    else {
      ctx.log && console.log(`Message is not valid!`);
      notify(`This form is under construction and will be functional very soon!`);
      // notify(`Please fill out all fields and provide valid credentials.`, `warning`);
    }
  }

  const onVerify = (res) => {
    ctx.log && console.log(`ReCAPTCHA response:`, res);
    if (res) {
      ctx.log && console.log(`ReCAPTCHA successfully verified!`);
      // setName(``);
      // setEmail(``);
      // setOrg(``);
      // setMessage(``);
      notify(`This form is under construction and will be functional very soon!`);
      // notify(`Message was sent successfully!`, `success`);
      setSpam(true);
    }
  }
  const onError = (err) => {
    console.log(`ReCAPTCHA error:`, err);
    notify(`Failed to establish a connection. Encountered a network error.`, `error`);
  }

  return (<>
    <div id="contactForm">
      <div id="contactFormDrop">
        <div style={{ width: '100%', height: '8px' }} />
        <div id="contactInputWrap">

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-name" value={name} onChange={handleName} type="text" placeholder="Enter your name..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-name">
              <span className="contactDivTitle">
                <h5>FULL&nbsp;NAME</h5>
              </span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-email" value={email} onChange={handleEmail} type="text" placeholder="Enter your email..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-email">
              <span className="contactDivTitle">
                <h5>EMAIL&nbsp;ADDRESS</h5>
              </span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-org" value={org} onChange={handleOrg} type="text" placeholder="Enter your organization..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-org">
              <span className="contactDivTitle">
                <h5>ORGANIZATION</h5>
              </span>
            </label>
          </div>

        </div>

        <div id="contactMessage">
          <textarea id="contactMessageInput" rows="12" value={message} onChange={handleMessage} placeholder="Enter your message..." autoComplete="off" required />
          <div id="contactSend">
            <div id="contactBtn" className={valid ? `valid` : `invalid`} onClick={handleSend}>
              <div id="contactBtnShape" />
              <h3>SEND&nbsp;MESSAGE</h3>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "64px" }} />
        <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey="6LeXNdkUAAAAAO3iHeaDIA4tSfA-n9ic23eeIejp" onChange={onVerify} onErrored={onError} theme="light" badge="inline" />
      </div>
    </div>
  </>)
}
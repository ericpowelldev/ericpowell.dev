import React from 'react';
import moment from 'moment';
import ReCAPTCHA from 'react-google-recaptcha';
import { Notify } from '../utils/Notify';
import { Global } from '../utils/Global';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const recaptchaRef = React.createRef();
  const notify = React.useContext(Notify);
  const ctx = React.useContext(Global);

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
  const handleValidation = event => {
    if (event.target.form.checkValidity()) {
      setValid(true);
    }
    else setValid(false);
  }

  const handleSendBtn = event => {
    event.preventDefault();

    let sendTime = localStorage.getItem(`last-send-time`) ? moment().diff(moment(localStorage.getItem(`last-send-time`)), `minutes`) : 15;

    if (valid) {
      if (sendTime >= 15) {
        ctx.log(`Message is valid!`);
        notify(`Attempting to send message...`, `info`, 30000);
        recaptchaRef.current.execute();
      }
      else {
        ctx.log(`Message is spam!`);
        notify(`Failed to send message. Please do not spam my email.`, `error`);
      }
    }
    else {
      ctx.log(`Message is not valid!`);
      notify(`Please fill out all fields and provide valid credentials.`, `warning`);
    }
  }

  const onVerify = (res) => {
    if (res) {
      ctx.log(`ReCAPTCHA successfully verified!`);
      handleSendForm();
    }
  }
  const onError = (err) => {
    console.log(`ReCAPTCHA error:`, err ? err : {});
    notify(`Failed to establish a connection. Encountered a network error.`, `error`);
  }

  const handleSendForm = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name: name, email: email, org: org, message: message })
    }).then(res => {
      console.log(`Response:`, res);
      ctx.log(`Message was sent!`);
      localStorage.setItem(`last-send-time`, moment().format());
      setName(``);
      setEmail(``);
      setOrg(``);
      setMessage(``);
      setValid(false);
      notify(`Message was sent successfully!`, `success`);
    }).catch(err => {
      console.log(`Error sending message:`, err);
      notify(`Failed to send message. Encountered a network error.`, `error`);
    });
  }

  return (<>
    <form id="contactForm" name="contact" onChange={handleValidation} onSubmit={handleSendBtn} noValidate>
      <div id="contactFormDrop">
        <div style={{ width: '100%', height: '8px' }} />
        <div id="contactInputWrap">

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-name" type="text" name="name" value={name} onChange={handleName} maxLength="64" placeholder="Enter your name..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-name">
              <span className="contactDivTitle">
                <h5>FULL&nbsp;NAME</h5>
              </span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-email" type="email" name="email" value={email} onChange={handleEmail} maxLength="64" placeholder="Enter your email..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-email">
              <span className="contactDivTitle">
                <h5>EMAIL&nbsp;ADDRESS</h5>
              </span>
            </label>
          </div>

          <div className="contactDiv">
            <input className="contactDivInput" id="contact-org" type="text" name="org" value={org} onChange={handleOrg} maxLength="64" placeholder="Enter your organization..." autoComplete="off" required />
            <label className="contactDivLabel" htmlFor="contact-org">
              <span className="contactDivTitle">
                <h5>ORGANIZATION</h5>
              </span>
            </label>
          </div>

        </div>

        <div id="contactMessage">
          <textarea id="contactMessageInput" rows="12" name="message" value={message} onChange={handleMessage} maxLength="1024" placeholder="Enter your message..." autoComplete="off" required />
          <div id="contactSend">
            <button id="contactBtn" className={valid ? `valid` : `invalid`} type="submit">
              <div id="contactBtnShape" />
              <h3>SEND&nbsp;MESSAGE</h3>
            </button>
          </div>
        </div>

        <div style={{ width: "100%", height: "64px" }} />
        <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={onVerify} onErrored={onError} theme="light" badge="inline" />
      </div>
    </form>
  </>)
}
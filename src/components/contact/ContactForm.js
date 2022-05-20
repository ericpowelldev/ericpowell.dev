////////// DEPENDENCIES //////////
import React from "react";
import dayjs from "dayjs";
import { Global } from "../../utils/Global";
import { Notify } from "../../utils/Notify";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

////////// COMPONENT //////////
export default function ContactForm(props) {
  const { log } = React.useContext(Global);
  const notify = React.useContext(Notify);

  const [name, setName] = React.useState(``);
  const [email, setEmail] = React.useState(``);
  const [org, setOrg] = React.useState(``);
  const [message, setMessage] = React.useState(``);

  const [valid, setValid] = React.useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOrg = (event) => {
    setOrg(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleValidation = (event) => {
    if (event.target.form.checkValidity()) {
      setValid(true);
    } else setValid(false);
  };

  const handleSendBtn = (event) => {
    event.preventDefault();

    const sendTime = localStorage.getItem(`last-send-time`)
      ? dayjs().diff(dayjs(localStorage.getItem(`last-send-time`)), `minutes`)
      : 1;

    if (valid) {
      if (sendTime >= 1) {
        log(`Message is valid!`);
        notify(`Attempting to send message...`, `info`, 30000);
        handleSendForm();
      } else {
        log(`Message is spam!`);
        notify(`Failed to send message. Please do not spam my email.`, `error`);
      }
    } else {
      log(`Message is not valid!`);
      notify(`Please fill out all fields and provide valid credentials.`, `warning`);
    }
  };

  const handleSendForm = () => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name: name, email: email, org: org, message: message }),
    })
      .then((res) => {
        log(`Netlify form response:`, res);
        if (res.status === 200) {
          log(`Message was sent!`);
          localStorage.setItem(`last-send-time`, dayjs().format());
          setName(``);
          setEmail(``);
          setOrg(``);
          setMessage(``);
          setValid(false);
          notify(`Message was sent successfully!`, `success`);
        } else {
          log(`Error sending message:`, res);
          notify(`Failed to send message. Response came back with status: ${res.status}.`, `error`);
        }
      })
      .catch((err) => {
        log(`Error sending message:`, err);
        notify(`Failed to send message. Encountered a network error.`, `error`);
      });
  };

  return (
    <>
      <form className="contact-form" name="contact" onChange={handleValidation} onSubmit={handleSendBtn} noValidate>
        <div className="contact-form-box">
          <div style={{ width: "100%", height: "8px" }} />

          <div className="contact-form-wrap">
            <div className="contact-form-div">
              <input
                className="contact-form-input"
                id="contact-name"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                maxLength="64"
                placeholder="Enter your name..."
                autoComplete="off"
                required
              />
              <label className="contact-form-label" htmlFor="contact-name">
                <span className="contact-form-label-txt">
                  <h6>FULL&nbsp;NAME</h6>
                </span>
              </label>
            </div>

            <div className="contact-form-div">
              <input
                className="contact-form-input"
                id="contact-email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                maxLength="64"
                placeholder="Enter your email..."
                autoComplete="off"
                required
              />
              <label className="contact-form-label" htmlFor="contact-email">
                <span className="contact-form-label-txt">
                  <h6>EMAIL&nbsp;ADDRESS</h6>
                </span>
              </label>
            </div>

            <div className="contact-form-div">
              <input
                className="contact-form-input"
                id="contact-org"
                type="text"
                name="organization"
                value={org}
                onChange={handleOrg}
                maxLength="64"
                placeholder="Enter your organization..."
                autoComplete="off"
                required
              />
              <label className="contact-form-label" htmlFor="contact-org">
                <span className="contact-form-label-txt">
                  <h6>ORGANIZATION</h6>
                </span>
              </label>
            </div>
          </div>

          <div className="contact-form-message">
            <textarea
              className="contact-form-message-input"
              rows="12"
              name="message"
              value={message}
              onChange={handleMessage}
              maxLength="1024"
              placeholder="Enter your message..."
              autoComplete="off"
              required
            />
            <div className="contact-form-send">
              <button className={`contact-form-send-btn ${valid ? `valid` : `invalid`}`} type="submit">
                <div className="contact-form-send-btn-shape" />
                <h4>SEND&nbsp;MESSAGE</h4>
              </button>
            </div>
          </div>

          <div style={{ width: "100%", height: "24px" }} />
        </div>
      </form>
    </>
  );
}

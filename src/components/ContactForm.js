import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [click, setClick] = useState(true);
  const [hide, setHide] = useState(false);
  const [error, setError] = useState(false);

  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_USER_ID;

  const name = (
    <div className="w3-section" style={hide ? { display: "none" } : null}>
      <label className="w3-left">Name</label>
      <input
        className="w3-input"
        style={{ width: "100%" }}
        type="text"
        required
        name="name"
      />
    </div>
  );

  const email = (
    <div className="w3-section" style={hide ? { display: "none" } : null}>
      <label className="w3-left">Email</label>
      <input
        className="w3-input"
        style={{ width: "100%" }}
        type="email"
        required
        name="email"
      />
    </div>
  );

  const message = (
    <div className="w3-section" style={hide ? { display: "none" } : null}>
      <label className="w3-left">Message</label>
      <textarea
        rows="8"
        style={{ width: "100%", marginTop: "10px" }}
        type="text"
        required
        name="message"
      ></textarea>
    </div>
  );

  const sending = (
    <div>
      <div className="containerx">
        <div className="box">
          <div className="border one" />
          <div className="border two" />
          <div className="border three" />
          <div className="border four" />
          <div className="line one" />
          <div className="line two" />
          <div className="line three" />
        </div>
      </div>
    </div>
  );

  function clickHandle() {
    setClick(!click);
  }

  function hideHandle() {
    setHide(!hide);
  }

  function errorHandle() {
    setError(!error);
  }

  const buttonRight = (
    <input
      type="submit"
      value="Send"
      className="w3-button w3-teal w3-right"
      onClick={hideHandle}
      style={hide ? { display: "none" } : null}
    ></input>
  );

  const buttonMiddle = (
    <button
      type="button"
      className="w3-button w3-teal"
      style={{ marginTop: "20px" }}
      onClick={clickHandle}
    >
      {error ? "Please send it again" : "Send message to Paul again"}
    </button>
  );

  const thanks = (
    <div>
      <p>Your message has been sent!!! </p>
      <p>Thank you for your message, I will get back to you soon. Cheers!</p>
      <i class="far fa-paper-plane fa-5x"></i>
    </div>
  );

  const err = (
    <div>
      <p>Your message has not sent out!!!</p>
      <i class="fas fa-exclamation-circle fa-5x"></i>
    </div>
  );

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        hideHandle();
        clickHandle();
        console.log(result.text);
      },
      (error) => {
        errorHandle();
        hideHandle();
        clickHandle();
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <form
      className="w3-container w3-card w3-padding-32 w3-white contact-form"
      onSubmit={sendEmail}
    >
      {click ? name : null}
      {click ? email : null}
      {click ? message : null}
      {hide ? sending : null}
      {!click && !error ? thanks : null}
      {!click && error ? err : null}
      {click ? buttonRight : buttonMiddle}
    </form>
  );
}

export default ContactForm;

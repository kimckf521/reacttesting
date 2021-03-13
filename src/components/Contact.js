import React, { useState } from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div
      className="w3-half w3-teal w3-container"
      style={{ height: "700px" }}
      id="contact"
    >
      <div className="w3-padding-64 w3-padding-large w3-center">
        <h1>Contact</h1>
        <p className="w3-opacity">GET IN TOUCH</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

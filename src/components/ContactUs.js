import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "outlook",
        "template_ka4g21y",
        e.target,
        "user_cFb1xCyCvr5F3s5f4yKrC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form
      className="w3-container w3-card w3-padding-32 w3-white contact-form"
      onSubmit={sendEmail}
    >
      {/* <input type="hidden" name="contact_number" /> */}
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

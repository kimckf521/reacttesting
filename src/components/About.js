import React from "react";
import data from "../data";
import profilePic from "../image/profile_pic.jpeg";

function About(props) {
  return (
    <div class="w3-half w3-blue-grey w3-container" style={{ height: "700px" }}>
      <div class="w3-padding-64 w3-center">
        <h1>About Me</h1>
        <img
          src={profilePic}
          class="w3-margin w3-circle"
          alt="Person"
          style={{ width: "50%" }}
        />
        <div class="w3-center-align w3-padding-large">
          <p style={{ fontSize: "large" }}>
            I am a web and iOS developer for 3 years experience
          </p>
          <p style={{ fontSize: "large" }}>
            Passionate about learning and working on web and iOS development
          </p>
          <p style={{ fontSize: "large" }}>
            Love mathematics, physics and computer science
          </p>
          <p style={{ fontSize: "large", fontStyle: "italic" }}>My motto:</p>
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
            "If there is nothing certain, then why don't take a risk for the
            exciting future?"
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

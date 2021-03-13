import React from "react";

function Logo() {
  return (
    <div
      class="w3-half w3-black w3-container w3-center"
      style={{ height: "700px" }}
    >
      <div class="w3-padding-64">
        <h1>Paul's Portfolio</h1>
      </div>
      <div class="w3-padding-64">
        <a
          href="#skills"
          class="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16"
          style={{ fontSize: "x-large" }}
        >
          Personal Skills
        </a>
        <a
          href="#work"
          class="w3-button w3-black w3-block w3-hover-teal w3-padding-16"
          style={{ fontSize: "x-large" }}
        >
          My Work
        </a>
        <a
          href="#edu"
          class="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16"
          style={{ fontSize: "x-large" }}
        >
          Education
        </a>
        <a
          href="#contact"
          class="w3-button w3-black w3-block w3-hover-brown w3-padding-16"
          style={{ fontSize: "x-large" }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Logo;

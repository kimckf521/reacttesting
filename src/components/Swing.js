import React from "react";
import { skill, web } from "../data";

function Swing() {
  const skillArray = skill.type;
  const webArray = web.work;
  const languageArray = skill.language;

  function skillFunc(skills) {
    return (
      <div className="col-3" style={{ fontSize: "70%", textAlign: "center" }}>
        <div className="bg-dark p-3 align-middle">
          <p className="align-middle">{skills}</p>
        </div>
      </div>
    );
  }
  function webFunc(webs) {
    return webs;
  }

  function languageFunc(lan) {
    return lan + " ";
  }

  return (
    <div
      className="w3-half w3-dark-grey w3-container w3-center"
      style={{ minHeight: "700px", fontSize: "large" }}
      id="skills"
    >
      <div className="w3-padding-64">
        <h1>Personal Skills</h1>
      </div>
      <div className="container" style={{ paddingBottom: "20px" }}>
        <div className="row g-3">{skillArray.map(skillFunc)}</div>
      </div>
      <div>
        <p>Language: {languageArray.map(languageFunc)}</p>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic outlined example"
          style={{ paddingBottom: "10px" }}
        >
          {webArray.map(webFunc)}
        </div>
        <p>Location: Melbourne, Australia</p>
      </div>
    </div>
  );
}

export default Swing;

import React from "react";

function Resume() {
  return (
    <div
      className="w3-half w3-indigo w3-container"
      style={{ height: "700px" }}
      id="edu"
    >
      <div className="w3-padding-64 w3-center">
        <h2 style={{ paddingBottom: "20px" }}>Education</h2>
        <div className="w3-container w3-responsive">
          <table className="w3-table">
            <tbody className="edu">
              <tr>
                <th>Year</th>
                <th className="w3-center">Degree</th>
                <th className="w3-center">Major</th>
                <th className="w3-center">School</th>
              </tr>
              <tr className="w3-white">
                <td>2020 2018</td>
                <td className="w3-center">Master of Engineering</td>
                <td className="w3-center">
                  Electrical and Electronic Engineering
                </td>
                <td className="w3-center">University of Melbourne</td>
              </tr>
              <tr>
                <td>2017 2015</td>
                <td className="w3-center">Bachelor of Science</td>
                <td className="w3-center">
                  Electrical and Electronic Engineering
                </td>
                <td className="w3-center">University of Melbourne</td>
              </tr>
              <tr className="w3-white">
                <td>2017 2015</td>
                <td className="w3-center">Diploma of Science</td>
                <td className="w3-center">Pure mathematics</td>
                <td className="w3-center">University of Melbourne</td>
              </tr>
              <tr>
                <td>2014 2012</td>
                <td className="w3-center">High School</td>
                <td className="w3-center">Science</td>
                <td className="w3-center">Taylor's College</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Resume;

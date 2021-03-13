import React, { useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import About from "./About";
import Logo from "./Logo";
import Work from "./Work";
import Resume from "./Resume";
import Swing from "./Swing";
import Contact from "./Contact";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="App">
      <Container c1={<Logo />} c2={<About />} />
      <Container c1={<Swing />} c2={<Work />} />
      <Container c1={<Resume />} c2={<Contact />} />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default AppLayout;

import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Employment from "./Employment";
import Portfolio from "./Portfolio";
import Awards from "./Awards";
import Contact from "./Contact";
import Blog from "./Blog";

function All() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="employment">
        <Employment />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="awards">
        <Awards />
      </div>
     
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default All;

import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Employment from "./Components/Employment";
import Portfolio from "./Components/Portfolio";
import Awards from "./Components/Awards";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import All from "./Components/All";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

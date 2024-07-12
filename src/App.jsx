import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./assets/Education";
import Employment from "./Components/Employment";
import Portfolio from "./Components/Portfolio";
function App() {
  return (

    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
        <Route path="/employment" element={<Employment></Employment>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

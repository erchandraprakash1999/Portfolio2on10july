import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (

    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

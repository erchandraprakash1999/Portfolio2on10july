import React from "react";
import mine from "../assets/mine.jpg";
import zayn from "../assets/nozayn.jpg";
import { NavLink } from "react-router-dom";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <>
      
      <nav style={{background:"#e7e7e7"}}>
        <div className="navbar-expand-md navbar mb-0 border border-bottom border-bottom-4 border-dark">
          <div className="navbar-brand h1" style={{ fontWeight: "900", fontSize: "50px" }}>
            <span className="h2" style={{ color: "#cc222b", fontWeight: "900" }}>
              .
            </span>
            muu
          </div>
          <button
            className="navbar-toggler-always ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span>&#9776;</span>
          </button>
         
        </div>
        

        <div className="container-fluid" style={{background:"#e7e7e7"}}>
          <div className="collapse" id="collapsibleNavbar">
            <div className="row">
              <div
                className="col-md-6 col-sm-6 d-none d-sm-block height-100 p-2 text-center "
                style={{
                
    
      
                  backgroundImage: `url(${zayn})`,
                  backgroundPosition: "right center",
                  borderRadius: "2px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "90vh",
                  opacity: "8",
                 
                }}
              >
                <div className="navbar-brand h1 text-white overflow-hidden" style={{ fontWeight: "bolder", fontSize: "8vw" }}>
                  <span className="h1" style={{ color: "#cc222b", fontWeight: "bolder", fontSize: "5vw" }}>
                    .
                  </span>
                  muu
                </div>
                <div  style={{marginTop:"40vh"}}>
                  <button className="btn m-1">
                    <i className="fa fa-facebook text-danger p-0 "></i>
                  </button>
                  <button className="btn m-1">
                    <i className="fa fa-instagram text-danger p-0 "></i>
                  </button>
                  <button className="btn m-1 ">
                    <i className="fa fa-twitter text-danger p-0"></i>
                  </button>
                  <button className="btn m-1 ">
                    <i className="fa fa-youtube text-danger p-0"></i>
                  </button>
                  <button className="btn m-1 ">
                    <i className="fa fa-linkedin-square text-danger p-0"></i>
                  </button>
                  <button className="btn m-1 ">
                    <i className="fa fa-pinterest text-danger p-0"></i>
                  </button>
                  <p className="text-white mt-3" style={{ fontFamily: "cursive", fontSize: "small" }}>
                  © 2016 MUU IS PROUDLY POWERED BY THEMEZAA.
                </p>
                </div>
                
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 height-100 p-2 text-center m-auto">
                <ul className="navbar-nav">
                  <li className="nav-item mb-1">
                    <NavLink
                      exact
                      to="/"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                      // Ensure active class is applied correctly
                    >
                      home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/about"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                      // Ensure active class is applied correctly
                    >
                      about me
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/skills"
                      className="nav-link"
                      style={{ fontFamily: "monospace" }}
                    >
                      skills
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/education"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                    >
                      education
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/employment"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                    >
                      employment
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/portfolio"
                      className="nav-link"
                      style={{ fontFamily: "monospace" }}
                    >
                      portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/awards"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                    >
                      awards
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/blog"
                      className="nav-link "
                      style={{ fontFamily: "monospace" }}
                    >
                      blog
                    </NavLink>
                  </li>
                  <li className="nav-item mb-1">
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      style={{ fontFamily: "monospace" }}
                    >
                      contact
                    </NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

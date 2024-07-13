import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zayn from "../assets/zayn3.jpg";
import zaynb from "../assets/zayn2.jpg";
import zaync from "../assets/zayn6.jfif";
import sign from "../assets/realsign.jpg";
import bg from "../assets/tryout1.jpg";

import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function About() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       <SwiperSlide>
  <div className="container-fluid " style={{ background: "#e7e7e7" }}>
    <div
      className="container mt-0"
      style={{
        backgroundColor: "#f5f3f3",
        maxHeight:"95vh",
        
        borderTop: "15px",
        borderBottom: "15px",
        borderRight: "25px",
        borderLeft: "25px",
        borderColor: "white",
        borderStyle: "solid",
        overflow:"scroll",
      }}
    >
      <div className="row" >
        <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
          <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>about_me</span>
        </div>

        <div
          className="col-md-5 mt-2 col-sm-5 col-6"
          style={{
            borderLeft: "0.5px black solid",
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <table className="table table-responsive col-md-12 col-sm-12 col-12">
            <tbody>
              <tr>
                <td className="font-weight-bold">Name:</td>
                <td>(123) - 456-7890</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Email:</td>
                <td>23 February 1986</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Nationality:</td>
                <td>United States</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Fax:</td>
                <td>(123) - 456-7890</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Date of birth:</td>
                <td>23 February 1986</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Nationality:</td>
                <td>United States</td>
              </tr>
            </tbody>
          </table>

          <button
            className="btn text-white "
            style={{ fontSize: "large", backgroundColor: "crimson",width:"60%" }}
          >
            Download Resume
            <i className="fa fa-long-arrow-right ml-1" style={{ fontSize: "1.5vw" }}></i>
          </button>
        </div>

        <div
          className="col-md-6 col-sm-7 col-6 px-0"
          style={{ borderLeft: "0.5px black solid" }}
        >
          <h3 className="px-5 pt-5 pb-0 ml-0 bg-warning text-white col-12" style={{ fontSize: "5vw", fontWeight: "bolder" }}>short History</h3>
          <i className="fas fa-comment-dots m-4 text-danger"></i>
          <p className="col-12 text-left" style={{ fontWeight: "lighter", fontFamily: "cursive" }}>
            I'm a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.
          </p>
          <p className="col-md-8 col-xs-12 col-sm-12 col-12" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
            Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. Adjustments to mock-ups as necessary to address problems encountered.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </>
  );
}

import React, { useRef, useState } from "react";
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
import bg from "../assets/try.jpg";

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
              className="container mt-0 "
              style={{
                backgroundColor: "white",
                height: "80vh",
                borderStyle: "solid",
              }}
            >
              <div className="row text-center">
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    about me
                </div>
                <div
                  className="col-md-5 col-sm-5 "
                  style={{
                    borderLeft: "2px black solid",
                    height: "80vh",
                    backgroundImage: `url(${bg})`,
                    backgroundPosition:"left top",
                   

            background:"cover"
                
                  }}
                >
                 <table>
                    <tbody className="" style={{height:"80vh"}}>
                      <tr className="">
                        <td className="pr-4">Name:</td>
                        <td>Beckham Roy</td>
                      </tr>
                      <tr className="">
                        <td className="pr-4">Email:</td>
                        <td>
                          <a href="mailto:beckham@gmail.com">
                            beckham@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="pr-4">Phone:</td>
                        <td>(123) - 456-7890</td>
                      </tr>
                      <tr className="">
                        <td className="pr-4">Fax:</td>
                        <td>(123) - 456-7890</td>
                      </tr>
                      <tr className="">
                        <td className="pr-4">Date of birth:</td>
                        <td>23 February 1986</td>
                      </tr>
                      <tr className="">
                        <td className="pr-4">Nationality:</td>
                        <td>United States</td> 
                      </tr>
                    </tbody>
                    </table>
                  
                </div>
                <div className="col-md-6 mt-2 col-sm-6 col-6">
                  <div
                    className="text-left "
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <h1
                      style={{ fontSize: "4vw", fontWeight: "bolder" }}
                      className="text-dark p-3 mt-4 mb-4"
                    >
                      Hello! <br />
                      My Name is Beckham Roy
                    </h1>
                    <p
                      className="text-danger mt-4 mb-4"
                      style={{ fontSize: "x-large", fontFamily: "monospace" }}
                    >
                      I design thoughtful digital experiences & beautiful brand
                      aesthetics. I provide high quality web development
                      services.
                    </p>
                    <img
                      src={sign}
                      alt=""
                      className="m-auto mt-5"
                      style={{ width: "30vw", height: "20vh" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

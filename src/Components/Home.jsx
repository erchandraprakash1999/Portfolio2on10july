import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zayn from "../assets/zayn3.jpg";
import zaynb from "../assets/zaynbg.jpg";
import zaync from "../assets/goodqzayn.jpg";
import sign from "../assets/realsign.jpg";

import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Home() {
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
          <div className="container-fluid " style={{background:"#e7e7e7"}}>
          <div className="container mt-0 " style={{backgroundColor:"#f5f3f3", height:"80vh",borderTop:"15px",borderBottom:"15px",borderRight:"25px",borderLeft:"25px",borderColor:"white",borderStyle: "solid"}}>
            <div className="row">
              <div className="col-md-6 mt-2 col-sm-6 col-6">
                <div
                  className="text-left "
                  style={{ height: "70vh", overflowY: "scroll" }}
                >
                  <h1
                    style={{ fontSize: "4vw", fontWeight: "bolder" }}
                    className="text-dark p-3 mt-4 mb-4"
                  >
                    Hello!  <br />My Name is Beckham Roy
                  </h1>
                  <p
                    className="text-danger mt-4 mb-4"
                    style={{ fontSize: "x-large", fontFamily: "monospace" }}
                  >
                    I design thoughtful digital experiences & beautiful brand
                    aesthetics. I provide high quality web development services.
                  </p>
                  <img
                    src={sign}
                    alt=""
                    className="m-auto mt-5"
                    style={{ width: "30vw",height:"20vh" }}
                  />
</div>
                
              </div>
              <div className="col-md-6 col-sm-6 col-6 p-4" style={{borderLeft:"2px black solid"}} >
              <img
                  src={zayn}
                  alt=""
                
                  
                  className="ml-4"
                  style={{ width: "80%",height:"60vh" ,backgroundPosition: "bottom", }}
                />
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="container-fluid " style={{background:"#e7e7e7"}}>
          <div className="container mt-0 " style={{backgroundColor:"#f5f3f3", height:"80vh",borderTop:"15px",borderBottom:"15px",borderRight:"25px",borderLeft:"25px",borderColor:"white",borderStyle: "solid"}}>
            <div className="row">
              <div className="col-md-6 mt-2 col-sm-6 col-6">
                <div
                  className="text-left "
                  style={{ height: "70vh", overflowY: "scroll" }}
                >
                  <h1
                    style={{ fontSize: "4vw", fontWeight: "bolder" }}
                    className="text-dark p-3 mt-4"
                  >
                    I am Creative
                    UI/UX Designer
                  </h1>
                  <p
                    className="text-danger mt-4"
                    style={{ fontSize: "x-large", fontFamily: "monospace" }}
                  >
                  Working with a strong focus on design and user experience. I create digital experiences for brands and companies.
                  </p>
<div className="text-center">
                  <button className="btn bg-dark text-white px-4 mt-4" style={{fontSize:"large"}}>Read More <i className="fa fa-long-arrow-right ml-1 " style={{fontSize:"1.5vw"}}></i></button></div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 p-4" style={{borderLeft:"2px black solid"}} >
              <img
                  src={zaynb}
                  alt=""
                
                  
                  className="ml-4"
                  style={{ width: "80%",height:"60vh" ,backgroundPosition: "bottom", }}
                />
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid " style={{background:"#e7e7e7"}}>
          <div className="container mt-0 " style={{backgroundColor:"#f5f3f3", height:"80vh",borderTop:"15px",borderBottom:"15px",borderRight:"25px",borderLeft:"25px",borderColor:"white",borderStyle: "solid"}}>
            <div className="row">
              <div className="col-md-6 mt-2 col-sm-6 col-6">
                <div
                  className="text-left "
                  style={{ height: "70vh", overflowY: "scroll" }}
                >
                  <h1
                    style={{ fontSize: "4vw", fontWeight: "bolder" }}
                    className="text-dark p-3 mt-4"
                  >
                    Yes I Believe
                    in Quality
                  </h1>
                  <p
                    className="text-danger mt-4"
                    style={{ fontSize: "x-large", fontFamily: "monospace" }}
                  >
                  We design websites with conversions in mind, our websites look great, but each page has a clearly defined conversion goal.
                  </p>
<div className="text-center">
                  <button className="btn bg-dark text-white px-4 mt-4" style={{fontSize:"large"}}>Read More <i className="fa fa-long-arrow-right ml-1 " style={{fontSize:"1.5vw"}}></i></button></div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6 p-4" style={{borderLeft:"2px black solid"}} >
              <img
                  src={zaync}
                  
                  alt=""
                
                  
                  className="ml-4"
                  style={{ width:"80%",height:"60vh" ,backgroundPosition: "top center"}}
                />
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

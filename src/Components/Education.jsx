import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import zaynb from "../assets/good.jpg";
import zaync from "../assets/zayn6.jfif";
import sign from "../assets/realsign.jpg";
import zayn from "../assets/checkout2.jpg";
import educationData from '../data.js';

import "../assets/styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Education() {
  const { title, backgroundImage, introParagraph, educationList } = educationData.educationSection;
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
       <div className="container-fluid p-4" style={{ background: "#e7e7e7" }}>
      <div className="container mt-0" style={{
        backgroundColor: "#f5f3f3",
        borderTop: "15px",
        borderBottom: "15px",
        borderRight: "25px",
        borderLeft: "25px",
        borderColor: "white",
        borderStyle: "solid"
      }}>
        <div className="row">
          <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center" style={{ maxHeight: "80vh" }}>
            <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>{title}</span>
          </div>

          <div className="col-md-5 col-sm-12 col-12" style={{ borderLeft: "2px black solid", borderRight: "2px black solid" }}>
            <img src={backgroundImage} alt="" style={{ width: "100%", height: "100%", backgroundPosition: "bottom" }} />
          </div>

          <div className="col-md-6 col-sm-12 col-12 sm-height-auto sm-no-padding-lr">
            <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto' }}>
              <div className="mCustomScrollbar" style={{ overflow: 'hidden', width: 'auto' }}>
                <div className="center-block padding-twelve-lr padding-five-tb md-padding-five-left md-no-padding-right sm-padding-ten-lr xs-no-padding-lr">
                  <div className="middle-block">
                    <div className="width-90 md-width-100">
                      <p className="col-md-12 col-12" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
                        {introParagraph}
                      </p>
                      <ol className="text-danger">
                        {educationList.map((edu, index) => (
                          <li key={index} className="margin-four-bottom xs-margin-five-bottom">
                            <div className="d-flex flex-md-row flex-column align-items-md-center">
                              <div className="col-md-12">
                                <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">{edu.university}</h3>
                                <span className="text-small text-light-gray display-inline-block text-dark line-height26">{edu.degree}<br />{edu.years}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
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

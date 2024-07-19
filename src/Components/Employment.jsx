import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import zaynb from "../assets/zayn2.jpg";
import zaync from "../assets/zayn6.jfif";
import sign from "../assets/realsign.jpg";
import zayn from "../assets/checkout1.webp";

import "../assets/styles.css";
import employmentData from '../data.json';

const Employment = () => {
  const { title, introParagraph, employmentList, quote, imageSrc } = employmentData.employmentSection;
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
              <div className="row" style={{ maxHeight: "85vh", overflow: "scroll" }}>
                <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center" style={{ borderRight: "2px black solid" }}>
                  <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>{title}</span>
                </div>
                
                <div className="col-md-6 col-sm-6 col-6 sm-height-auto sm-no-padding-lr">
                  <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto' }}>
                    <div className="mCustomScrollbar" style={{ overflow: 'hidden', width: 'auto' }}>
                      <div className="center-block padding-twelve-lr padding-five-tb md-padding-five-left md-no-padding-right sm-padding-ten-lr xs-no-padding-lr">
                        <div className="middle-block">
                          <div className="width-90 md-width-100">
                            <p className="col-10 mt-3" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
                              {introParagraph}
                            </p>
                            <ol className="text-danger text-left d-flex flex-column justify-content-center align-items-center" style={{ listStyle: "none" }}>
                              {employmentList.map((job, index) => (
                                <li key={index} className="margin-four-bottom xs-margin-five-bottom mt-4">
                                  <div className="d-flex flex-md-row flex-column align-items-md-center">
                                    <div className="col-md-12 col-sm-12 col-xs-12 xs-no-padding text-left">
                                      <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">
                                        <span style={{ background: "crimson", color: "white" }} className="btn btn-sm px-3 mr-5">{job.years}</span>
                                        {job.organization}
                                      </h3>
                                      <span className="text-small text-light-gray text-dark mr-5">{job.description}</span>
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
                
                <div className="col-md-5 col-sm-5 col-6 p-4" style={{ borderLeft: "2px black solid" }}>
                  <div className="row d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <div className="col-md-8">
                      <img src={imageSrc} alt="" style={{ width: "100%", height: "70vh", backgroundPosition: "bottom" }} />
                    </div>
                    <div className="col-md-4 text-left">
                      <p style={{ fontFamily: "cursive", fontSize: "large" }}>{quote}</p>
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

export default Employment;

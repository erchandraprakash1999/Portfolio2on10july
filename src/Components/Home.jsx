import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zayn from "../assets/zayn3.jpg";
import zaynb from "../assets/zaynbg.jpg";
import zaync from "../assets/goodqzayn.jpg";
import sign from "../assets/realsign.jpg";

import "../assets/styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import homeData from "../data.json";

export default function Home() {
  const { heading, paragraph, signSrc, zaynSrc } = homeData.homeSec1;
  const { zaynSrc2 } = homeData.homeSec2;
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
          <div
            className="container-fluid mb-4"
            style={{ background: "#e7e7e7" }}
          >
            <div
              className="container mt-0"
              style={{
                backgroundColor: "#f5f3f3",
                maxHeight: "80vh",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
              }}
            >
              <div className="row">
                <div className="col-md-6 mt-2 col-sm-6 col-6">
                  <div
                    className="d-flex justify-content-center align-items-center flex-column"
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <h1
                      style={{ fontSize: "4vw", fontWeight: "bolder" }}
                      className="text-dark p-3 mt-4 mb-4"
                    >
                      {heading.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h1>
                    <p
                      className="text-danger mt-4 mb-4"
                      style={{ fontSize: "x-large", fontFamily: "monospace" }}
                    >
                      {paragraph}
                    </p>
                    <img
                      src={signSrc}
                      alt=""
                      className="m-auto mt-5"
                      style={{ width: "30vw", height: "20vh" }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 col-6"
                  style={{ borderLeft: "2px black solid" }}
                >
                  <img
                    src={zaynSrc}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "bottom",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="container-fluid mb-4"
            style={{ background: "#e7e7e7" }}
          >
            <div
              className="container mt-0"
              style={{
                backgroundColor: "#f5f3f3",
                maxHeight: "80vh",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
              }}
            >
              <div className="row">
                <div className="col-md-6 mt-2 col-sm-6 col-6">
                  <div
                    className="d-flex justify-content-center align-items-center flex-column p-3"
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <h1
                      style={{ fontSize: "4vw", fontWeight: "bolder" }}
                      className="text-dark p-3 mt-4"
                    >
                      {homeData.homeSec2.heading
                        .split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </h1>
                    <p
                      className="text-danger mt-4"
                      style={{ fontSize: "x-large", fontFamily: "monospace" }}
                    >
                      {homeData.homeSec2.paragraph}
                    </p>
                    <div className="text-center">
                      <button
                        className="btn bg-dark text-white px-4 mt-4"
                        style={{ fontSize: "large" }}
                      >
                        {homeData.homeSec2.buttonText}
                        <i
                          className={`${homeData.homeSec2.buttonIconClass} ml-1`}
                          style={{ fontSize: "1.5vw" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 col-6"
                  style={{ borderLeft: "2px black solid" }}
                >
                  <img
                    src={zaynSrc2}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "bottom",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="container-fluid mb-4"
            style={{ background: "#e7e7e7" }}
          >
            <div
              className="container mt-0 "
              style={{
                backgroundColor: "#f5f3f3",
                maxHeight: "80vh",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
              }}
            >
              <div className="row">
                <div className="col-md-6 mt-2 col-sm-6 col-6">
                  <div
                    className="d-flex justify-content-center align-items-center flex-column "
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <h1
                      style={{ fontSize: "4vw", fontWeight: "bolder" }}
                      className="text-dark p-3 mt-4"
                    >
                      Yes I Believe in Quality
                    </h1>
                    <p
                      className="text-danger mt-4"
                      style={{ fontSize: "x-large", fontFamily: "monospace" }}
                    >
                      We design websites with conversions in mind, our websites
                      look great, but each page has a clearly defined conversion
                      goal.
                    </p>
                    <div className="text-center">
                      <button
                        className="btn bg-dark text-white px-4 mt-4"
                        style={{ fontSize: "large" }}
                      >
                        Read More{" "}
                        <i
                          className="fa fa-long-arrow-right ml-1 "
                          style={{ fontSize: "1.5vw" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 col-6"
                  style={{ borderLeft: "2px black solid" }}
                >
                  <img
                    src={zaynb}
                    alt=""
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "top center",
                    }}
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

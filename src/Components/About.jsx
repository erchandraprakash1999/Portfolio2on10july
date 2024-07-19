import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import aboutData from "../data.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/styles.css";
import bg from "../assets/good.jpg";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function About() {
  const { title, tableData, resumeButton, shortHistory } =
    aboutData.aboutSection;

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
          <div className="container-fluid" style={{ background: "#e7e7e7" }}>
            <div
              className="container mt-0"
              style={{
                backgroundColor: "#f5f3f3",
                maxHeight: "95vh",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
                overflow: "scroll",
              }}
            >
              <div className="row">
                <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
                  <span
                    id="rt"
                    style={{ fontSize: "3vw", fontWeight: "bolder" }}
                  >
                    {title}
                  </span>
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
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td className="font-weight-bold">{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button
                    className="btn text-white"
                    style={{
                      fontSize: "large",
                      backgroundColor: "crimson",
                      width: "60%",
                    }}
                  >
                    {resumeButton.text}
                    <i
                      className={`${resumeButton.iconClass} ml-1`}
                      style={{ fontSize: "1.5vw" }}
                    ></i>
                  </button>
                </div>

                <div
                  className="col-md-6 col-sm-7 px-0 col-7"
                  style={{ borderLeft: "0.5px black solid" }}
                >
                  <h3
                    className="px-5 pt-5 pb-0 ml-0 bg-warning text-white col-12 col-sm-12"
                    style={{ fontSize: "5vw", fontWeight: "bolder" }}
                  >
                    {shortHistory.heading}
                  </h3>
                  <i className="fas fa-comment-dots m-4 text-danger"></i>
                  <p
                    className="col-12 text-left"
                    style={{ fontWeight: "lighter", fontFamily: "cursive" }}
                  >
                    {shortHistory.introText}
                  </p>
                  <p
                    className="col-12 col-lg-8 col-sm-12"
                    style={{
                      fontSize: "300",
                      fontWeight: "normal",
                      fontFamily: "monospace",
                    }}
                  >
                    {shortHistory.detailedText}
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

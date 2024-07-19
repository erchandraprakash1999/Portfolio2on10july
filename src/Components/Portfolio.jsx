import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import data from '../data.js';

export default function Portfolio() {
  const {
    title,
    heading,
    introParagraph,
    image,
    designs,
    tabs,
    buttonText,
    buttonIconClass
  } = data.portfolioSection;

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
            <div
              className="container mt-0"
              style={{
                backgroundColor: "#f5f3f3",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
              }}
            >
              <div className="row" style={{ maxHeight: "85vh", overflow: "scroll" }}>
                <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
                  <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>{title}</span>
                </div>

                <div className="col-md-5 col-sm-12 col-12 p-4" style={{ borderLeft: "2px black solid" }}>
                  <img
                    src={image}
                    alt=""
                    className="ml-4"
                    style={{ width: "100%", backgroundPosition: "bottom" }}
                  />
                </div>
                <div className="col-md-6 col-sm-12 col-12 sm-height-auto sm-no-padding-lr" style={{ borderLeft: "2px black solid" }}>
                  <h1
                    style={{ fontSize: "4vw", fontWeight: "bolder" }}
                    className="text-dark p-3 mt-4 mb-4"
                  >
                    {heading}
                  </h1>
                  <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto' }}>
                    <div className="mCustomScrollbar" style={{ overflow: 'hidden', width: 'auto' }}>
                      <div className="center-block padding-twelve-lr padding-five-tb md-padding-five-left md-no-padding-right sm-padding-ten-lr xs-no-padding-lr">
                        <div className="middle-block">
                          <div className="width-90 md-width-100">
                            <p className="col-md-8 col-sm-10 mt-3" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
                              {introParagraph}
                            </p>
                            <ol className="text-left text-danger" style={{ listStyle: "outside" }}>
                              {designs.map((design, index) => (
                                <li key={index} className="m-2 text-secondary" style={{ fontSize: "small" }}>
                                  {design}
                                </li>
                              ))}
                            </ol>
                            <button
                              className="btn text-white btn-danger w-50 m-3"
                              style={{ fontSize: "large", backgroundColor: "crimson" }}
                            >
                              {buttonText}
                              <i className={`${buttonIconClass} ml-1`} style={{ fontSize: "1.5vw" }}></i>
                            </button>
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
        <SwiperSlide>
          <div className="container-fluid p-4" style={{ background: "#e7e7e7" }}>
            <div
              className="container mt-0"
              style={{
                backgroundColor: "#f5f3f3",
                borderTop: "15px",
                borderBottom: "15px",
                borderRight: "25px",
                borderLeft: "25px",
                borderColor: "white",
                borderStyle: "solid",
              }}
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-center nav" role="tablist">
                    {tabs.map((tab, index) => (
                      <a
                        key={index}
                        href={`#tab${index}`}
                        data-toggle="tab"
                        className={`p-4 nav-item ${index === 0 ? 'active' : ''}`}
                        role="tab"
                        aria-controls={`tab${index}`}
                        aria-selected={index === 0}
                        style={{ textDecoration: "none", fontFamily: "cursive", fontWeight: "bolder", fontSize: "large" }}
                      >
                        {tab.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row tab-content">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`col-md-12 tab-pane fade ${index === 0 ? 'show active' : ''} mb-5`}
                    id={`tab${index}`}
                    role="tabpanel"
                    aria-labelledby={`tab${index}-tab`}
                  >
                    <div className="row mt-4">
                      {tab.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="col-md-4">
                          <img src={image} alt="" width="90" className="p-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

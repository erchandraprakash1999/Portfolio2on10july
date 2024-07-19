import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-bootstrap/Carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import data from '../data.js';

export default function Awards() {
  const [awardSections, setAwardSections] = useState([]);

  useEffect(() => {
    setAwardSections(data.awardSections || []);
  }, []);

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
        {awardSections.length > 0 && (
          <>
            <SwiperSlide>
              <div className="container-fluid" style={{ background: "#e7e7e7" }}>
                <div
                  className="container mt-0"
                  style={{
                    maxHeight: "80vh",
                    overflow: "scroll",
                    backgroundColor: "#f5f3f3",
                    border: "15px solid white",
                  }}
                >
                  <div className="row">
                    <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center" style={{ borderRight: "2px black solid" }}>
                      <span
                        id="rt"
                        style={{ fontSize: "3vw", fontWeight: "bolder" }}
                      >
                        awards
                      </span>
                    </div>
                    <div className="col-md-5 mt-2 col-sm-12 col-12" style={{ height: "70vh",overflowY:"scroll" }}>
                      <div
                        className="text-left d-flex flex-column justify-content-between align-items-center"
                        style={{ height: "70vh", overflowY: "scroll" }}
                      >
                        <h1
                          style={{ fontSize: "4vw", fontWeight: "bolder" }}
                          className="text-dark p-3 mt-4 mb-4"
                        >
                          {awardSections[0].title}
                        </h1>

                        <p
                          className="col-12 text-secondary"
                          style={{ fontWeight: "normal", fontFamily: "monospace" }}
                        >
                          {awardSections[0].description}
                        </p>

                      
                          {awardSections[0].images && awardSections[0].images.map((imgSrc, index) => (
                            <img
                              key={index}
                              src={imgSrc}
                              alt={`Award ${index + 1}`}
                              className="p-2 mb-5"
                              style={{ width: "50%" }}
                            />
                          ))}
                        
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 p-4 mt-4" style={{ borderLeft: "2px black solid",overflow:"hidden" }}>
                      <img
                        src={awardSections[0].backgroundImage || zayn}
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

            {awardSections.find(section => section.slides) && (
              <SwiperSlide>
                <div className="container-fluid" style={{ background: "#e7e7e7" }}>
                  <div className="container mt-0" style={{ backgroundColor: "#f5f3f3", borderTop: "15px", borderBottom: "15px", borderRight: "25px", borderLeft: "25px", borderColor: "white", borderStyle: "solid", maxHeight: "80vh", overflow: "scroll" }}>
                    <section className="slider container mb-3">
                      <Carousel className="custom-carousel">
                        {awardSections.find(section => section.slides).slides.map((slide, index) => (
                          <Carousel.Item key={index} className="slide pt-5">
                            <div className="row">
                              <div className="col-md-6">
                                <img className="d-block w-100" src={slide.image} alt={`Slide ${index + 1}`} />
                              </div>
                              <div className="col-md-6">
                                <div className="award-explanation">
                                  <h2 style={{ fontWeight: "bolder" }}>{slide.title}</h2>
                                  <p className="text-secondary">{slide.description}</p>
                                </div>
                              </div>
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </section>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </>
        )}
      </Swiper>
    </>
  );
}

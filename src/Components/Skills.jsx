import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedNumbers from "react-animated-numbers";

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

export default function Skills() {
  const [num, setNum] = useState(331231);

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
            <div className="container mt-0" style={{ backgroundColor: "#f5f3f3", height: "80vh", border: "15px solid white" }}>
              <div className="row">
                <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center" id="rt2">
                  <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>Skills</span>
                </div>
                <div className="col-md-5 mt-2 col-sm-6 col-6 d-flex flex-column justify-content-center align-items-center" style={{ height: "70vh" }}>
                  <div className="text-center" style={{ height: "70vh", overflowY: "scroll" }}>
                    <h3 style={{ fontSize: "2vw", fontWeight: "bolder" }} className="text-dark p-3 mb-4">
                      Good Design Keeps the User Happy, the Manufacturer in the Black and the Aesthete Unoffended.
                    </h3>
                    <p className="text-danger mt-4 mb-4" style={{ fontSize: "x-large", fontFamily: "monospace" }}>
                      We're creative minds
                    </p>
                    <p className="col-12" style={{ fontWeight: "normal", fontFamily: "monospace" }}>
                      Ensured mock-ups met both visual and textual branding standards. Defined and documented website design standards when needed. Designed adaptive layouts to maintain a consistent user experience across the product. Created clickable prototypes when needed.
                    </p>
                    <button className="btn text-white" style={{ fontSize: "large", backgroundColor: "crimson", width: "60%" }}>
                      View Skills
                      <i className="fa fa-long-arrow-right ml-1" style={{ fontSize: "1.5vw" }}></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-6 p-4" style={{ borderLeft: "2px black solid" }}>
                  <img src={zayn} alt="" style={{ width: "100%", height: "100%", backgroundPosition: "bottom" }} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-fluid" style={{ background: "#e7e7e7" }}>
          <div className="container mt-0" style={{ backgroundColor: "#f5f3f3", border: "15px solid white" }}>
            <div className="row">
              {[
                { icon: "instagram", title: "Thinking", text: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad." },
                { icon: "twitter", title: "Design", text: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad." },
                { icon: "facebook", title: "Sketches", text: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad." },
                { icon: "pinterest-p", title: "Code", text: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad." }
              ].map((box, index) => (
                <div className="col-md-3" key={index}>
                  <div className="box-part text-center p-2 m-2">
                    <i className={`fa fa-${box.icon} fa-3x text-danger`} aria-hidden="true"></i>
                    <div className="title">
                      <h4>{box.title}</h4>
                    </div>
                    <div className="text">
                      <span>{box.text}</span>
                    </div>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-md-8">

            <div className="progress m-2">
              <span className="h6 mr-2">TASK A</span><div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="50"></div>
            </div>
            <div className="progress m-2">
            <span className="h6 mr-2">TASK B</span><div className="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="59"></div>
            </div>
            <div className="progress m-2">
            <span className="h6 mr-2">TASK C</span> <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="600"></div>
            </div>
            <div className="progress m-2">
            <span className="h6 mr-2">TASK D</span> <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="50"></div>
            </div>
           

           
            </div>
            </div>
            <div className="row">
        
          <div className="col-md-12 d-flex justify-content-around mt-4">
            <div className="col-md-6 col-xs-3 text-right">
            <AnimatedNumbers
              includeComma
              className="animated-numbers"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={num}
              fontStyle={{
                fontSize: 40,
                color: "red",
              }}
            />
            <AnimatedNumbers
              includeComma
              className="animated-numbers"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={num}
              fontStyle={{
                fontSize: 40,
                color: "red",
              }}
            />
           </div>
           <div className="col-md-6 col-xs-3  text-center">
       
      
            <AnimatedNumbers
              includeComma
              className="animated-numbers"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={num}
              fontStyle={{
                fontSize: 40,
                color: "red",
              }}
            />
            <AnimatedNumbers
              includeComma
              className="animated-numbers"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={num}
              fontStyle={{
                fontSize: 40,
                color: "red",
              }}
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

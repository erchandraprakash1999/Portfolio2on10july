import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import zaynb from "../assets/zayn2.jpg";
import zaync from "../assets/zayn6.jfif";
import sign from "../assets/realsign.jpg";
import zayn from "../assets/checkout3.jpg";
import d1 from "../assets/d1.jpg"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"
import d4 from "../assets/d4.jpg"
import d5 from "../assets/d5.jpg"
import br1 from "../assets/br1.jpg"
import br2 from "../assets/br2.jpg"
import br3 from "../assets/br3.jpg"
import br4 from "../assets/br4.jpg"
import br5 from "../assets/br5.jpg"
import ph1 from "../assets/ph1.jpg"
import ph2 from "../assets/ph2.jpg"
import ph3 from "../assets/br3.jpg"
import ph4 from "../assets/ph4.jpg"


import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Portfolio() {
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
      <div className="row" style={{maxHeight:"85vh",overflow:"scroll"}}>
        <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
          <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>Portfolio</span>
        </div>

        <div className="col-md-5 col-sm-5 col-6 p-4" style={{borderLeft:"2px black solid"}} >
              <img
                  src={zayn}
                  alt=""
                
                  
                  className="ml-4"
                  style={{ width: "100%" ,backgroundPosition: "bottom", }}
                />
              </div>
              <div className="col-md-6 col-sm-6 col-6 sm-height-auto sm-no-padding-lr" style={{borderLeft:"2px black solid"}}>
              <h1
                    style={{ fontSize: "4vw", fontWeight: "bolder" }}
                    className="text-dark p-3 mt-4 mb-4"
                  >
                    Other Things <br /> I have Designed.
                  </h1>
      <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto',  }}>
        <div className="mCustomScrollbar" style={{ overflow: 'hidden', width: 'auto',  }}>
          <div className="center-block padding-twelve-lr padding-five-tb md-padding-five-left md-no-padding-right sm-padding-ten-lr xs-no-padding-lr">
            <div className="middle-block">
              <div className="width-90 md-width-100">
                
                <p className="col-md-8 col-sm-10 mt-3" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
                Education is not the learning of facts, but the training of the mind to think. Education is a gift that none can take away. I am still learning every day.
          </p>
                {/* features grid */}
                <ol className="text-left text-danger" style={{listStyle:"outside"}}>
                  <li className="m-2 text-secondary" style={{fontSize:"small "}}>Design is not just what is looks and feels like
                  </li>
                  <li className="m-2 text-secondary" style={{fontSize:"small"}}>The Details are not the details which makes the details</li>
                  <li className="m-2 text-secondary"   style={{fontSize:"small"}}>Good design does not date. Bad design does</li>
                  <li className="m-2 text-secondary" style={{fontSize:"small"}}>Design is not just what is looks and feels like</li>
                 
                </ol>
                <button
            className="btn text-white btn-danger w-50 m-3"
            style={{ fontSize: "large", backgroundColor: "crimson" }}
          >
           View Portfolio
            <i className="fa fa-long-arrow-right ml-1" style={{ fontSize: "1.5vw" }}></i>
          </button>
                
                {/* end features grid */}
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
<div className="container-fluid p-4" style={{ background: "#e7e7e7"}}>
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
        <a
          href="#home1"
          data-toggle="tab"
          className="p-4 nav-item active"
          role="tab"
          aria-controls="home1"
          aria-selected="true"
          style={{textDecoration:"none",fontFamily:"cursive",fontWeight:"bolder",fontSize:"large"}}
        >
         Design
        </a>
        <a
          href="#about2"
          style={{textDecoration:"none",fontFamily:"cursive",fontWeight:"bolder",fontSize:"large"}}
          data-toggle="tab"
          className="p-4 nav-item"
          role="tab"
          aria-controls="about2"
          aria-selected="false"
        >
          Branding
        </a>
        <a
          href="#contact3"
          data-toggle="tab"
          style={{textDecoration:"none",fontFamily:"cursive",fontWeight:"bolder",fontSize:"large"}}
          className="p-4 nav-item"
          role="tab"
          aria-controls="contact3"
          aria-selected="false"
        >
          Photography
        </a>
      </div>
    </div>
  </div>
  <div className="row tab-content">
    <div
      className="col-md-12 tab-pane fade show active mb-5"
      id="home1"
      role="tabpanel"
      aria-labelledby="home1-tab"
    >
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={d1} alt="" width="90" className="p-1" />
        </div>
        <div className="col-md-4">
          <img src={d3} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={d4} alt="" width="90" className="p-1"/>
        </div>
      </div>
   
   
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={d5} alt="" width="90" className="p-1" />
        </div>
        <div className="col-md-4">
          <img src={d3} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={d4} alt="" width="90" className="p-1"/>
        </div>
      </div>
      </div>
  
    <div
      className="col-md-12 tab-pane fade mb-5" 
      id="about2"
      role="tabpanel"
      aria-labelledby="about2-tab"
    >
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={br2} alt="" width="90" className="p-1" />
        </div>
        <div className="col-md-4">
          <img src={br3} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={br1} alt="" width="90" className="p-1"/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={br4} alt="" width="90" className="p-1" />
        </div>
        <div className="col-md-4">
          <img src={br5} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={br1} alt="" width="90" className="p-1"/>
        </div>
      </div>
    </div>
    
    <div
      className="col-md-12 tab-pane fade mb-5"
      id="contact3"
      role="tabpanel"
      aria-labelledby="contact3-tab"
    >
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={ph1} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={ph2} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={ph3} alt="" width="90" className="p-1"/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={ph4} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={ph2} alt="" width="90" className="p-1"/>
        </div>
        <div className="col-md-4">
          <img src={ph3} alt="" width="90" className="p-1"/>
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

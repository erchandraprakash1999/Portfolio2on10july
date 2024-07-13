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
import zayn from "../assets/checkout2.jpg";

import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Education() {
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
      <div className="row">
        <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
          <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>education</span>
        </div>

        <div className="col-md-5 col-sm-5 col-6 p-4" style={{borderLeft:"2px black solid"}} >
        <img src={zayn} alt="" style={{ width: "100%", height: "100%", backgroundPosition: "bottom" }} />
              </div>
             
              <div className="col-md-6 col-sm-6 col-6 sm-height-auto sm-no-padding-lr">
      <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto',  }}>
        <div className="mCustomScrollbar" style={{ overflow: 'hidden', width: 'auto',  }}>
          <div className="center-block padding-twelve-lr padding-five-tb md-padding-five-left md-no-padding-right sm-padding-ten-lr xs-no-padding-lr">
            <div className="middle-block">
              <div className="width-90 md-width-100">
                
                <p className="col-10 mt-3" style={{ fontSize: "300", fontWeight: "normal", fontFamily: "monospace" }}>
                Education is not the learning of facts, but the training of the mind to think. Education is a gift that none can take away. I am still learning every day.
          </p>
                {/* features grid */}
                <ol className="text-danger" style={{}}>
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
  
      <div className="col-md-10 col-sm-10 col-xs-12 xs-no-padding">
        <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">University of Design</h3>
        <span className="text-small text-light-gray display-inline-block text-dark line-height26">Visual art & Design<br />2011 - 2012</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
    
      <div className="col-md-10 col-sm-10 col-xs-12 xs-no-padding">
        <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">Boston University</h3>
        <span className="text-small text-light-gray display-inline-block text-dark line-height26">Visual art & Design<br />2011 - 2012</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
     
      <div className="col-md-10 col-sm-10 col-xs-12 xs-no-padding">
        <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">Boston University</h3>
        <span className="text-small text-light-gray display-inline-block text-dark line-height26">Degree of Design<br />2009 - 2011</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li>
    <div className="d-flex flex-md-row flex-column align-items-md-center">
      
      <div className="col-md-10 col-sm-10 col-xs-12 xs-no-padding">
        <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">Design University</h3>
        <span className="text-small text-light-gray display-inline-block line-height26 text-dark">Degree of Web Design<br />2007 - 2009</span>
      </div>
    </div>
  </li>
  {/* end features item */}
</ol>
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


      </Swiper>
    </>
  );
}

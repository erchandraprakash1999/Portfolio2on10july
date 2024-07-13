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
import zayn from "../assets/checkout1.webp";

import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Employment() {
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
      <div className="row " style={{maxHeight:"85vh",overflow:"scroll"}}>
        <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center">
          <span id="rt" style={{ fontSize: "3vw", fontWeight: "bolder" }}>employment</span>
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
                <ol className="text-danger text-left" style={{listStyle:"none"}}>
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom mt-4">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
  
      <div className="col-md-12 col-sm-12 col-xs-12 xs-no-padding text-left">
 <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">       <span style={{background:"crimson",color:"white"}} className="btn btn-sm px-3 mr-5">2016 - 2013
 </span >University of Design</h3>
        <span className="text-small text-light-gray text-dark mr-5">Execute all visual design stages from concept to final hand-off to engineering.</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom mt-4">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
    
    <div className="col-md-12 col-sm-12 col-xs-12 xs-no-padding text-left">
 <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">       <span style={{background:"crimson",color:"white"}} className="btn btn-sm px-3 mr-5">2016 - 2013
 </span >University of Design</h3>
        <span className="text-small text-light-gray text-dark mr-5">Execute all visual design stages from concept to final hand-off to engineering.</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li className="margin-four-bottom xs-margin-five-bottom mt-4">
    <div className="d-flex flex-md-row flex-column align-items-md-center">
     
    <div className="col-md-12 col-sm-12 col-xs-12 xs-no-padding text-left">
 <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">       <span style={{background:"crimson",color:"white"}} className="btn btn-sm px-3 mr-5">2016 - 2013
 </span >University of Design</h3>
        <span className="text-small text-light-gray text-dark mr-5">Execute all visual design stages from concept to final hand-off to engineering.</span>
      </div>
    </div>
  </li>
  {/* end features item */}
  {/* features item */}
  <li>
    <div className="d-flex flex-md-row flex-column align-items-md-center mt-4">
      
    <div className="col-md-12 col-sm-12 col-xs-12 xs-no-padding text-left">
 <h3 className="text-small font-weight-700 margin-5px-bottom text-dark">       <span style={{background:"crimson",color:"white"}} className="btn btn-sm px-3 mr-5">2016 - 2013
 </span >University of Design</h3>
        <span className="text-small text-light-gray text-dark mr-5">Execute all visual design stages from concept to final hand-off to engineering.</span>
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
    <div className="col-md-5 col-sm-5 col-6 p-4 " style={{borderLeft:"2px black solid"}} >
        <div className="row d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <div className="col-md-8" >
              <img
                  src={zayn}
                  alt=""
                
                  
                  
                  style={{ width: "100%",height:"70vh",backgroundPosition: "bottom", }}
                />
                </div>
                <div className="col-md-4 text-left"  >
                <p style={{  fontFamily:"cursive",fontSize:"large"}}>Awards can give you a tremendous amount of encouragement to keep getting better, no matter how young or old you are.</p>
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

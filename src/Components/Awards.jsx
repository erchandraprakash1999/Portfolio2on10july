import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedNumbers from "react-animated-numbers";

// Import Swiper styles
import Carousel from "react-bootstrap/Carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zayn from "../assets/zayn3.jpg";
import zaynb from "../assets/zaynbg.jpg";
import zaync from "../assets/goodqzayn.jpg";
import sign from "../assets/realsign.jpg";
import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.jpg";
import award4 from "../assets/award4.jpg";
import awarda from "../assets/awarda.jpg"
import awardb from "../assets/awardb.jpg"
import awardc from "../assets/awardc.jpg"

import "../assets/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Awards() {
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
          <div className="container-fluid" style={{ background: "#e7e7e7"}} >
            <div
              className="container mt-0"
              style={{  maxHeight:"80vh",overflow:"scroll",
                backgroundColor: "#f5f3f3",
             
                border: "15px solid white",
              }}
            >
              <div className="row" >
                <div className="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center" style={{borderRight:"2px black solid"}}>
                  <span
                    id="rt"
                    style={{ fontSize: "3vw", fontWeight: "bolder", }}
                  >
                    awards
                  </span>
                </div>
                <div
                  className="col-md-5 mt-2 col-sm-6 col-6 d-flex flex-column justify-content-center align-items-center"
                  style={{ height: "70vh" }}
                >
                  <div
                    className="text-center"
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <h1
                      style={{ fontSize: "4vw", fontWeight: "bolder" }}
                      className="text-dark p-3 mt-4 mb-4"
                    >
                      I am not Aiming
                      <br />
                      for an award
                    </h1>

                    <p
                      className="col-12 text-secondary"
                      style={{ fontWeight: "normal", fontFamily: "monospace" }}
                    >
                      Ensured mock-ups met both visual and textual branding
                      standards. Defined and documented website design standards
                      when needed. Designed adaptive layouts to maintain a
                      consistent user experience across the product. Created
                      clickable prototypes when needed.
                    </p>

                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={award1}
                        alt=""
                        className="p-2"
                        style={{ width: "50%" }}
                      />{" "}
                      <img
                        src={award2}
                        alt=""
                        className="p-2"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={award3}
                        alt=""
                        className="p-2"
                        style={{ width: "50%" }}
                      />{" "}
                      <img
                        src={award4}
                        alt=""
                        className="p-2"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-sm-6 col-6 p-4"
                  style={{ borderLeft: "2px black solid" }}
                >
                  <img
                    src={zayn}
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
        <div className="container-fluid " style={{background:"#e7e7e7"}}>
        <div className="container mt-0 " style={{backgroundColor:"#f5f3f3",borderTop:"15px",borderBottom:"15px",borderRight:"25px",borderLeft:"25px",borderColor:"white",borderStyle: "solid"  ,maxHeight:"80vh",overflow:"scroll",}}>
        <section className="slider container mb-3">
  <Carousel className="custom-carousel">
    <Carousel.Item className="slide pt-5">
      <div className="row">
        <div className="col-md-6 ">
          <img className="d-block w-100"  src={awardc} alt="First slide" />
        </div>
        <div className="col-md-6">
          <div className="award-explanation">
            <h2 style={{fontWeight:"bolder"}}>Award Title 1</h2>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat quisquam quasi id! Aliquid provident cumque deserunt quisquam blanditiis aliquam dolorum sunt, nobis perspiciatis, soluta molestiae ut illum pariatur vitae?
            Cupiditate quia aliquid architecto distinctio sed dolores nobis. Cumque, magni? Magnam voluptates rem quam nostrum nisi necessitatibus asperiores et reiciendis. Soluta, ex eligendi ullam impedit temporibus accusamus sint cum illo!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, accusantium? Voluptas blanditiis dignissimos distinctio expedita facere officia, rerum debitis aperiam nihil esse impedit corrupti odit magni quia est numquam illo!
          Iure recusandae modi quos blanditiis, cum a ducimus obcaecati placeat accusantium animi excepturi sint ratione. Cum eaque dolorum officiis soluta voluptas, ratione consequuntur temporibus cupiditate et deleniti at iure eum!</p></div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item className="slide pt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="d-block w-100"  src={awarda}alt="First slide" />
        </div>
        <div className="col-md-6">
          <div className="award-explanation">
            <h2 style={{fontWeight:"bolder"}}>Award Title 2</h2>
            <p className="text-secondary">Here goes the explanation about the award... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, nam sunt! Provident, pariatur error exercitationem commodi iste nobis itaque cupiditate. Impedit consequuntur architecto quos ea incidunt esse excepturi magnam placeat.
            Ab similique consequatur odio praesentium repellat laborum non sunt, minima provident, nulla est alias. Recusandae corporis culpa, aliquid aut ex in velit provident, iusto voluptates impedit deleniti vel non inventore
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae ipsa quod blanditiis commodi cum consequuntur nostrum quam. Explicabo aut veritatis commodi reiciendis ratione soluta debitis praesentium qui libero fugiat?
         Ut dolore excepturi unde voluptates quisquam labore repudiandae a obcaecati modi necessitatibus, adipisci quia architecto natus aut accusantium nobis eius? Facere dolores accusantium nobis similique eum officia qui, laborum culpa?.</p> </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item className="slide pt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="d-block w-100" src={awardb} alt="First slide" />
        </div>
        <div className="col-md-6">
          <div className="award-explanation">
            <h2 style={{fontWeight:"bolder"}}>Award Title 3</h2>
            <p className="text-secondary">Here goes the explanation about the award... Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis animi iure tempore beatae? Nisi vero minus tempore quia, eaque molestias ab sapiente pariatur doloribus, error atque laborum impedit perspiciatis?
            Voluptatem recusandae itaque accusantium magnam, harum corporis in quasi voluptas reiciendis rerum, officia laborum impedit dicta dolores accusamus aliquam facere inventore. Hic aspernatur neque ipsa consequatur ducimus beatae quisquam similique.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, facilis sed fugiat possimus laborum iusto enim nobis amet laboriosam, incidunt libero, blanditiis praesentium excepturi explicabo nemo. Corrupti minus hic repellat.
      Itaque, provident, qui sit rerum quae mollitia delectus adipisci unde inventore porro, sint quos quidem magni modi possimus quasi fugit nesciunt repudiandae nihil natus voluptates quaerat. Molestias exercitationem quam dolores!  </p> </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</section>
</div>
</div>

</SwiperSlide>

      </Swiper>
    </>
  );
}

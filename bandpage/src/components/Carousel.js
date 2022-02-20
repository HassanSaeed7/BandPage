import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import one from "../1.jpg";
import two from "../2.jpg";
import three from "../3.jpg";
import four from "../4.jpg";
import five from "../5.jpg";
import six from "../6.jpg";
import seven from "../7.jpg";
import { EffectCoverflow, Pagination } from "swiper";


  

  

const Carousel = () => {
    
    

  return (
    <>
    
    < Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={false}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >


        <SwiperSlide> 
          <img src={six} />
       </SwiperSlide>
      
        <SwiperSlide> 
          <img src={one} />
          
        </SwiperSlide>

        <SwiperSlide> 
          <img src={two} />
       </SwiperSlide>

       <SwiperSlide> 
          <img src={three} />
       </SwiperSlide>

       <SwiperSlide> 
          <img src={four} />
       </SwiperSlide>

        <SwiperSlide> 
          <img src={five} />
       </SwiperSlide>

       <SwiperSlide> 
          <img src={seven} />
       </SwiperSlide>
      
      </ Swiper>
    </>
  );
};

export default Carousel;

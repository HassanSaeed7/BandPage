import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import one from "../assets/1s.webp";
import two from "../assets/2.webp";
import three from "../assets/3small.webp";
import five from "../assets/5.webp";
import six from "../assets/6small.webp";
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = ({ btnName }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={three} alt='tours'/>
          <button className="carousel-btn">Tours</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={one} alt='music'/>
          <button className="carousel-btn">Music</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={five} alt='videos'/>
          <button className="carousel-btn">Videos</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={two} alt='other projects'/>
          <button className="carousel-btn">Other Projects</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={six} alt='band members'/>
          <button className="carousel-btn">Band Members</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

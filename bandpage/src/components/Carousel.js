import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import one from "../1s.jpg";
import two from "../2.jpg";
import three from "../3small.jpg";
import four from "../4.jpg";
import five from "../5.jpg";
import six from "../6small.jpg";
import seven from "../7.jpg";
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
          <img src={three} />
          <button className="carousel-btn">Tours</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={one} />
          <button className="carousel-btn">Music</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={five} />
          <button className="carousel-btn">Videos</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={two} />
          <button className="carousel-btn">Other Projects</button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={six} />
          <button className="carousel-btn">Band Members</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

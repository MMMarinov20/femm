import React from "react";
// import CarouselSlider from "../Property/CarouselSlider";

// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

interface Props {
  src: string[];
}
const GallerySlider: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      {/* <div className="w-screen px-0 overflow-hidden text-center">
        <CarouselSlider
          src={[
            "../../Rental/Room1.jpg.png",
            "../../Rental/Room1.jpg.png",
            "../../Rental/Room1.jpg.png",
          ]}
          centerPadding="20%"
        />
      </div> */}
      <div className="w-full px-[10vw] overflow-hidden">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, A11y]}
          className="overflow-hidden w-full h-full"
        >
          {props.src.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="" className="w-full rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default GallerySlider;

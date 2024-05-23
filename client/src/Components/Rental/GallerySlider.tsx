import React, { useState, useEffect } from "react";
// import CarouselSlider from "../Property/CarouselSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  src: string[];
}
const GallerySlider: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e: any) => {
    if (e.target.tagName === "IMG") return;
    setIsOpen(false);
  };
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
          className="overflow-hidden w-full h-full z-0"
        >
          {props.src.map((src, index) => (
            <SwiperSlide key={index} className="pb-10">
              <img
                src={src}
                alt=""
                className="w-full rounded-xl z-0 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-100 overflow-hidden z-50"
          style={{ display: isOpen ? "block" : "none" }}
          onClick={closeModal}
        >
          <button className="absolute top-5 right-5 z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

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
            className="overflow-hidden w-full h-full z-0"
          >
            {props.src.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="fixed top-1/4">
                  <img src={src} alt="" className="rounded-2xl z-0" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GallerySlider;

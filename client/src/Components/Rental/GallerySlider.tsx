import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "../LoadingSpinner";
import ImageSpinner from "../ImageSpinner";

interface Props {
  src: string[];
}

const GallerySlider: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState<boolean[]>(
    Array(props.src.length).fill(true)
  );
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            console.log(entry);
            observer.unobserve(img);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    imgRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [imgRefs]);

  const closeModal = (e: any) => {
    if (e.target.tagName === "IMG") return;
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  return (
    <React.Fragment>
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
              {loading[index] && <ImageSpinner />}{" "}
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                loading="lazy"
                data-src={src}
                alt={src}
                className="rounded-2xl z-0 cursor-pointer"
                style={{ display: loading[index] ? "hidden" : "block" }}
                onLoad={() => handleImageLoad(index)}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setIsOpen(true);
                }}
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
                  <img
                    loading="lazy"
                    src={src}
                    alt=""
                    className="rounded-2xl z-0"
                  />
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

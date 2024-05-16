import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  src: string[];
  centerPadding: string;
}

// const modalDiv = (src: string) => {
//   return `
//   <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
//         <img src=${src} alt="Image" className="w-full h-full object-contain" />
//   </div>`;
// };

const CarouselSlider: React.FC<Props> = (props) => {
  const createImageModal = (src: string) => {
    const modal = document.createElement("div");
    modal.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-70",
      "flex",
      "justify-center",
      "items-center",
      "z-50"
    );

    const img = document.createElement("img");
    img.src = src;
    img.classList.add(
      "w-full",
      "h-full",
      "object-contain",
      "lg:w-1/2",
      "lg:h-1/2"
    );

    img.addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    modal.appendChild(img);
    document.body.appendChild(modal);
    //const modal = modalDiv(src);
  };

  const [index, setIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: props.centerPadding,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    console.log(index);
  }, [index]);

  const goToPrevSlide = () => {
    const newIndex = index === 0 ? props.src.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = index === props.src.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const handleBoxClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  return (
    <React.Fragment>
      <div className="w-full px-4 lg:px-[10vw]">
        <Slider
          {...settings}
          className="overflow-hidden"
          afterChange={(current) => setIndex(current)}
          ref={sliderRef}
        >
          {props.src.map((src, i) => (
            <div key={i} className="md:px-10 focus:outline-none z-0">
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full overflow-hidden"
                onClick={() => createImageModal(src)}
              />
            </div>
          ))}
        </Slider>
        <div className="flex flex-row justify-center gap-x-5 z-10 items-center">
          <IoIosArrowBack
            className="mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl"
            onClick={goToPrevSlide}
          />
          <div className="flex gap-x-5">
            {props.src.map((src, i) => (
              <div
                key={i}
                className={`w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-[#FF6241] rounded-xl bg-[url(${src})] bg-center bg-no-repeat bg-cover ${
                  index === i
                    ? "border-[#FF6241] rounded-xl"
                    : "border-white rounded-xl"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                }}
                onClick={() => handleBoxClick(i)}
              ></div>
            ))}
          </div>

          <IoIosArrowForward
            className="mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl"
            onClick={goToNextSlide}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarouselSlider;

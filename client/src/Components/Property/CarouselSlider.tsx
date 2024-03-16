import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to show 1 slide
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 768, // Medium screens and larger
        settings: {
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <div className="w-full px-0">
      <Slider {...settings} className="overflow-hidden">
        <div className="lg:px-10 focus:outline-none">
          <img
            src="./Property/SliderImage.svg"
            alt="Image 1"
            className="w-full overflow-hidden"
          />
        </div>
        <div className="lg:px-10">
          <img
            src="./Property/SliderImage.svg"
            alt="Image 2"
            className="w-full overflow-hidden"
          />
        </div>
        <div className="lg:px-10">
          <img
            src="./Property/SliderImage.svg"
            alt="Image 3"
            className="w-full overflow-hidden"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;

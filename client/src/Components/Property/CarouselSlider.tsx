import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  src: string[];
  centerPadding: string;
}

const CarouselSlider: React.FC<Props> = (props) => {
  const [index, setIndex] = useState(0);

  const settings = {
    dots: true,
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
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 lg:px-[10vw]">
      <Slider
        {...settings}
        className="overflow-hidden"
        afterChange={(current) => setIndex(current)}
      >
        {props.src.map((src, index) => (
          <div key={index} className="md:px-10 focus:outline-none">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full overflow-hidden"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;

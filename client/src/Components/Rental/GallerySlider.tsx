import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import CarouselSlider from "../Property/CarouselSlider";
const GallerySlider: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-screen px-0 overflow-hidden text-center">
        <CarouselSlider
          src={[
            "../../Rental/RoomDesktop.png",
            "../../Rental/RoomDesktop.png",
            "../../Rental/RoomDesktop.png",
          ]}
          centerPadding="20%"
        />
      </div>
    </React.Fragment>
  );
};

export default GallerySlider;

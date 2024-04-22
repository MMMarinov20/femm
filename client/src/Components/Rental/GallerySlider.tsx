import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import CarouselSlider from "../Property/CarouselSlider";
const GallerySlider: React.FC = () => {
  return (
    <React.Fragment>
      {/* <div className="px-4 lg:px-[10vw]">
        <img
          src="../../Rental/Room.png"
          alt="room"
          className="w-screen h-full pt-20 md:hidden"
        />

        <img
          src="../../Rental/RoomDesktop.png"
          alt="room"
          className="hidden pt-20 md:block w-full"
        />
        <div className="flex flex-row justify-center gap-x-5 -mt-10 items-center">
          <IoIosArrowBack className="mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl" />
          <div className="w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-[#FF6241] rounded-xl bg-[url('../../Rental/Room.png')] bg-center bg-no-repeat bg-cover"></div>
          <div className="w-20 h-20 lg:w-32 lg:h-32 border-[3px] border-white rounded-xl bg-[url('../../Rental/Room.png')] bg-center bg-no-repeat bg-cover"></div>
          <IoIosArrowBack className="rotate-180 mt-5 cursor-pointer lg:text-2xl 2xl:text-4xl" />
        </div>
      </div> */}

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

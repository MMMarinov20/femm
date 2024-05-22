import React from "react";
import Benefit from "./Benefit";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FaEuroSign } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaStairs } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import { ApartmentDetails } from "../../data/lang/en/Property/Apartament";

interface Props {
  Data: ApartmentDetails;
  LangData: {
    Info: string[];
    Buttons: {
      First: string;
      Second: string;
      Third: string;
    };
  };
}

const Landing: React.FC<Props> = ({ Data, LangData }) => {
  return (
    <React.Fragment>
      <div className="w-screen lg:px-[10vw]">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-center px-4 lg:px-0">
          <div className="w-full lg:w-[60%] 3xl:w-1/2 h-full flex flex-col justify-between">
            <Carousel />

            <div className="lg:flex lg:flex-row items-center xl:justify-between gap-x-6">
              <div className="flex flex-row gap-x-6 py-5">
                <h1 className="inline-flex font-GilroyBold text-center lg:text-xl xl:text-2xl gap-x-2">
                  <IoBedOutline className="text-3xl xl:text-4xl text-[#FF6241]" />
                  {Data.Bedrooms}
                </h1>
                <h1 className="inline-flex font-GilroyBold text-center lg:text-xl xl:text-2xl gap-x-2">
                  <LuBath className="text-3xl xl:text-4xl text-[#FF6241]" />
                  {Data.Bathrooms}
                </h1>
                <h1 className="inline-flex font-GilroyBold text-center lg:text-xl xl:text-2xl gap-x-2">
                  <FaStairs className="text-3xl xl:text-4xl text-[#FF6241]" />
                  {Data.Floors}
                </h1>
                <h1 className="inline-flex font-GilroyBold text-center lg:text-xl xl:text-2xl gap-x-2">
                  <BiArea className="text-3xl xl:text-4xl text-[#FF6241]" />
                  {Data.Area}&sup2;
                </h1>
              </div>
              <div className="">
                <h1 className="inline-flex font-GilroyBold text-2xl items-center xl:text-3xl 2xl:text-4xl overflow-hidden  w-full gap-x-2 text-[#FF6241]">
                  <FaEuroSign className="text-3xl 2xl:text-4xl text-[#FF6241]" />
                  999, 999
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[70%] 2xl:w-[33%] 3xl:w-[27%] flex flex-col items-center px-7 lg:px-10">
            <div className="p-2 h-fit rounded-xl w-full md:w-1/2 lg:w-full shadow-2xl">
              <div className="border-[1px] border-[#FF6241] px-5 py-4 grid place-items-center h-full w-full font-GilroyExtraBold gap-y-3 rounded-xl">
                {/* {Object.keys(Data).map(
                  (key, i) =>
                    i !== Object.keys(Data).length - 1 && (
                      <Benefit
                        key={key}
                        Title={LangData.Info[i]}
                        // @ts-expect-error test
                        Subtitle={Data[key]}
                      />
                    )
                )} */}
                {Object.keys(Data).map((key, i) => {
                  if (i == Object.keys(Data).length - 1) return;
                  if (i == Object.keys(Data).length - 2) return;
                  return (
                    <Benefit
                      key={key}
                      Title={LangData.Info[i]}
                      // @ts-expect-error test
                      Subtitle={Data[key]}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-3 w-full justify-center items-center mt-5">
              {Object.keys(LangData.Buttons).map((key) => (
                <button
                  key={key}
                  className="font-SolidenTrialExpanded bg-[#FF6241] rounded-lg py-3 text-white text-xs 2xl:text-base w-[90%]"
                >
                  {/* @ts-expect-error test */}
                  {LangData.Buttons[key]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;

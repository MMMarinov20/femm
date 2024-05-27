import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IconType } from "react-icons";

type Feature = {
  Icon: IconType;
  Feature: string;
};

interface Props {
  Title: string;
  Location: string;
  Features: Feature[][];
  Description: string;
  Rating: number;
  ButtonText: string;
  Grade: string;
  Footer: string;
}

const DescriptionContainer: React.FC<Props> = (props) => {
  const [features, setFeatures] = useState<Feature[][]>([]);
  useEffect(() => {
    if (props.Features.length != 0) setFeatures([...props.Features]);
  }, [props.Features]);
  return (
    <React.Fragment>
      <div className="w-full h-fit bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-y-3 md:text-lg">
        <h1 className="font-SolidenTrialBoldExpanded text-2xl md:text-4xl">
          {props.Title}
        </h1>

        <h1 className="inline-flex">
          <FaLocationDot className="text-xl mr-1 text-[#FF6241]" />
          {props.Location}
        </h1>

        <button className="w-[40%] bg-[#FF6241] py-3 text-white font-SolidenTrialRegular rounded-lg text-xs md:text-base transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
          {props.ButtonText}
        </button>

        <div className="flex flex-col gap-y-3 py-2">
          {features.map((feature) =>
            feature.map((item, index) => (
              <React.Fragment key={index}>
                <h1 className="inline-flex">
                  <item.Icon className="text-xl mr-2 text-[#FF6241]" />
                  {item.Feature}
                </h1>
              </React.Fragment>
            ))
          )}
        </div>

        <h1 className="font-GilroyRegular">{props.Description}</h1>

        <h1 className="font-GilroyExtraBold md:text-xl">
          {props.Grade}
          <span className="text-[#FF6241]">{props.Rating}</span>
        </h1>

        <h1 className="font-GilroyRegular">
          Distance in accommodation descriptions is calculated using ©
          OpenStreetMap
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
          <div className="w-full h-32 border-[1px] border-[#464646] rounded-2xl"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DescriptionContainer;

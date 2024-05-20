import React, { useEffect } from "react";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
interface Props {
  title: string;
  description: string;
  icon: IconType;
}

const Advantage: React.FC<Props> = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-300 ease-in-out w-[80%] md:w-1/2 lg:w-[80%] 2xl:w-[70%] h-[100%] bg-white shadow-2xl px-5 py-10 rounded-xl 2xl:rounded-3xl flex flex-col gap-y-3"
      >
        <props.icon className="text-[#FF6241] text-5xl xl:text-6xl" />
        <h1 className="font-SolidenTrialBoldExpanded text-lg max-w-[15rem] min-[350px]:text-xl lg:text-2xl lg:max-w-xs">
          {props.title}
        </h1>

        <h1 className="font-GilroyRegular md:text-lg">{props.description}</h1>
      </div>
    </React.Fragment>
  );
};

export default Advantage;

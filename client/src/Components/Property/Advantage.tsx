import React from "react";

interface Props {
  title: string;
  description: string;
}

const Advantage: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out w-[80%] md:w-1/2 lg:w-[80%] 2xl:w-[70%] h-[100%] bg-white shadow-2xl px-5 py-10 rounded-xl 2xl:rounded-3xl flex flex-col gap-y-3">
        <img
          src="/Property/Icon.svg"
          alt="advantages"
          className="w-[15vw] md:w-[10vw] lg:w-[8vw] 2xl:w-[3vw]"
        />
        <h1 className="font-SolidenTrialBoldExpanded text-lg max-w-[15rem] min-[350px]:text-xl lg:text-2xl lg:max-w-xs">
          {props.title}
        </h1>

        <h1 className="font-GilroyRegular">{props.description}</h1>
      </div>
    </React.Fragment>
  );
};

export default Advantage;

import React from "react";

interface Props {
  Title: string;
  Subtitle: string | number;
}

const Benefit: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-center w-full min-[350px]:text-lg md:text-base xl:text-xl 2xl:text-lg">
        <h1>{props.Title}</h1>
        <hr className="border-[1px] px-2 mx-5 min-[350px]:px-10 md:px-2 2xl:px-5" />
        <h1 className="">{props.Subtitle}</h1>
      </div>
    </React.Fragment>
  );
};

export default Benefit;

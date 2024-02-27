import React from "react";

interface Props {
  placeholder: string;
  type: string;
  Icon: React.FC<{ className: string }>;
}

const Input: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="w-full md:w-1/2 lg:w-8/12 flex items-center border-[1px] border-[#464646] rounded-lg px-2 py-2 2xl:py-3 my-3">
        <props.Icon className="text-[#464646] text-center text-lg 2xl:text-xl" />
        <input
          type={props.type}
          placeholder={props.placeholder}
          className=" pl-2 pt-1 w-full outline-none border-none text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular placeholder:text-[#464646] 2xl:placeholder:text-base"
        />
      </div>
    </React.Fragment>
  );
};

export default Input;

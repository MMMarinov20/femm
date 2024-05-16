import React, { forwardRef } from "react";
import { countryList } from "../../data/countries";
interface Props {
  placeholder?: string;
  type: string;
  Icon: React.FC<{ className: string }>;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { placeholder, type, Icon },
  ref
) => {
  return (
    <React.Fragment>
      <div className="w-full md:w-1/2 lg:w-8/12 flex items-center border-[1px] border-[#464646] rounded-lg px-2 py-2 2xl:py-3 my-3">
        <Icon className="text-[#464646] text-center text-lg 2xl:text-xl" />
        {type === "select" ? (
          <select className="pl-2 pt-3 w-full outline-none border-none text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular placeholder:text-[#464646] 2xl:placeholder:text-base">
            <option value="Optional" selected>
              Optional
            </option>
            {countryList.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className="pl-2 pt-1 w-full outline-none border-none text-[#464646] text-xs 2xl:text-lg font-SolidenTrialRegular placeholder:text-[#464646] 2xl:placeholder:text-base"
          />
        )}
      </div>
    </React.Fragment>
  );
};

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;

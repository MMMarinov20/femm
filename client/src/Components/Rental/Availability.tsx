import React, { useState } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Availability: React.FC = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  let footer = <p>Check-in date - departure date</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <div className="px-4 pb-32 w-full lg:px-[10vw]">
      <div className="py-5 shadow-2xl w-full px-4 rounded-xl">
        <h1 className="font-SolidenTrialBoldExpanded text-4xl pb-3">
          Availability
        </h1>
        <div className="overflow-hidden lg:flex lg:flex-row lg:justify-between">
          <input
            type="text"
            placeholder={footer.props.children}
            className="w-full bg-white border-[#464646] border-[1px] rounded-lg p-2 focus:outline-none placeholder:font-GilroyRegular"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
          {isCalendarOpen && (
            <div className="absolute z-50 lg:mt-16 lg:w-fit bg-white rounded-lg shadow-lg">
              <DayPicker
                defaultMonth={new Date(2022, 8)}
                mode="range"
                selected={range}
                onSelect={setRange}
                footer={footer}
                className="overflow-auto"
              />
            </div>
          )}
          <div className="flex flex-row justify-between gap-x-10 py-5 lg:p-0 lg:gap-x-5 lg:px-5 lg:w-full">
            <select className="w-[80%] lg:w-[50%] bg-white border-[#464646] border-[1px] rounded-lg p-2 focus:outline-none font-GilroyRegular">
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
            </select>

            <select className="w-[80%] lg:w-[50%] bg-white border-[#464646] border-[1px] rounded-lg p-2 focus:outline-none font-GilroyRegular">
              <option>Adults</option>
            </select>
          </div>

          <div className="flex flex-row justify-between gap-x-10 lg:gap-x-5 lg:w-full">
            <select className="w-[80%] lg:w-[50%] bg-white border-[#464646] border-[1px] rounded-lg p-2 focus:outline-none font-GilroyRegular">
              <option>1 Room</option>
            </select>

            <button className="w-[80%] lg:w-[50%] bg-[#FF6241] rounded-lg p-2 focus:outline-none font-SolidenTrialExpanded text-xs min-[350px]:text-base lg:text-xs text-white">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;

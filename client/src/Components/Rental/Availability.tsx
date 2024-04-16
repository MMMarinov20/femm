import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface Props {
  date: DateRange;
  adults: number;
}

const Availability: React.FC<Props> = (props) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const adults = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    setRange(props.date);
  }, [props.date]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adultsValue = adults.current?.value;
    const startDate = range?.from;
    const endDate = range?.to;

    if (endDate && startDate && endDate <= startDate) {
      console.log("Error: End date cannot be earlier than start date");
      return;
    }
  };

  return (
    <div className="px-4 pb-32 w-full lg:px-[10vw]" id="availability">
      <div className="py-5 shadow-2xl w-full px-4 rounded-xl">
        <h1 className="font-SolidenTrialBoldExpanded text-4xl pb-3">
          Availability
        </h1>
        <form>
          <div className="overflow-hidden lg:flex lg:flex-row lg:justify-between">
            <input
              type="text"
              placeholder={footer.props.children}
              value={footer.props.children}
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
              <select
                value={props.adults != 0 ? props.adults : 1}
                ref={adults}
                className="w-[80%] lg:w-[50%] bg-white border-[#464646] border-[1px] rounded-lg p-2 focus:outline-none font-GilroyRegular"
              >
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

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[80%] lg:w-[50%] bg-[#FF6241] rounded-lg p-2 focus:outline-none font-SolidenTrialExpanded text-xs min-[350px]:text-base lg:text-xs xl:text-base text-white"
              >
                Check Availability
              </button>
            </div>
          </div>
          <div className="w-full bg-[#F2F2F2] my-5 pb-5 md:pb-20 rounded-xl">
            <div className="font-SolidenTrialBoldExpanded text-xs min-[350px]:text-base w-full xl:text-xl text-white bg-[#FF6241] flex flex-row px-4 md:py-3 md:gap-x-5 lg:gap-x-10 rounded-t-xl">
              <h1>Type of accommodation</h1>
              <h1>Number of Guests</h1>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 xl:w-[60%] gap-x-3 gap-y-3 px-4 pt-5">
              <div className="bg-white w-full rounded-lg p-1">
                <h1 className="font-GilroyBold text-[#4C76B2] underline">
                  1 bedroom studio
                </h1>
                <h1 className="font-GilroyRegular">1 double bed</h1>
              </div>
              <div className="bg-white w-full rounded-lg p-1">
                <h1 className="font-GilroyBold text-[#4C76B2] underline">
                  1 bedroom studio
                </h1>
                <h1 className="font-GilroyRegular">1 double bed</h1>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#FF6241] w-full text-white rounded-lg p-2 focus:outline-none font-SolidenTrialExpanded text-base"
              >
                {" "}
                Show Price
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Availability;

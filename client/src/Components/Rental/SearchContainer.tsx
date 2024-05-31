import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { ReservationData } from "../../Pages/Rental";
interface Props {
  setReservationData: (data: ReservationData) => void;
  Data: {
    Title: string;
    SubTitle: string;
    Check: string;
    Button: string;
  };
}

const SearchContainer: React.FC<Props> = (props) => {
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const adultsRef = useRef<HTMLSelectElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDateRef.current && endDateRef.current) {
      const startDate = startDateRef.current.value;
      const endDate = endDateRef.current.value;
      if (
        startDate === "" ||
        endDate === "" ||
        startDate == endDate ||
        new Date(startDate) > new Date(endDate) ||
        new Date(startDate) < new Date() ||
        new Date(endDate) < new Date() ||
        new Date(endDate).getTime() - new Date(startDate).getTime() < 259200000
      )
        return;
      props.setReservationData({
        range: {
          from: new Date(startDate),
          to: new Date(endDate),
        },
        adults: parseInt(adultsRef.current?.value || "1"),
      });
      scrollTo("availability");
    }
  };

  return (
    <React.Fragment>
      <div className="w-full lg:w-[60%] h-fit bg-white shadow-2xl rounded-2xl p-5 flex flex-col md:text-lg">
        <h1 className="font-GilroyBold text-2xl md:text-4xl overflow-hidden">
          {props.Data.Title}
        </h1>
        <h1 className="font-GilroyRegular">{props.Data.SubTitle}</h1>
        <form>
          <div className="flex flex-col gap-y-5 pt-3">
            <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
              <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
              <input
                placeholder="Burgas"
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
                disabled
              />
            </div>
            <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
              <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
              <input
                ref={startDateRef}
                placeholder="Search"
                type="date"
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
              />
            </div>
            <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
              <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
              <input
                placeholder="Search"
                ref={endDateRef}
                type="date"
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
              />
            </div>
            <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
              <FaLocationDot className="text-2xl mr-3 text-[#FF6241]" />
              <select
                ref={adultsRef}
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
              </select>
            </div>
          </div>

          <div>
            <input type="checkbox" className="mt-5" required />
            <label className="font-GilroyRegular pl-2">
              {props.Data.Check}
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSearch}
            className="w-full bg-[#FF6241] py-3 text-white font-GilroyRegular rounded-lg text-xs mt-2 md:text-base 2xl:text-lg transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] border-[#FF6241] border-[1px]"
          >
            {props.Data.Button}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchContainer;

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  surrounding: { [key: string]: { building: string }[] };
}

const Accordion: React.FC<Props> = ({ surrounding }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const firstKey = Object.keys(surrounding)[0]; // Gets the first key of the object
  const buildings = surrounding[firstKey]; // Gets the array of buildings under the first key

  return (
    <div className="w-full px-4 py-10">
      <div className="bg-white rounded-lg shadow-xl">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-SolidenTrialBoldExpanded">{firstKey}</h2>
          <IoIosArrowDown
            className={`h-6 w-6 transition-transform transform ${
              isOpen ? "rotate-180 text-[#FF6241]" : "rotate-0"
            }`}
          />
        </div>
        {isOpen && (
          <div className="p-4">
            <div className="flex flex-row w-full justify-between font-SolidenTrialRegular">
              {buildings.map((item, index) => (
                <React.Fragment key={index}>
                  <h1>{firstKey}</h1>
                  <h1 className="font-GilroyRegular">{item.building}</h1>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

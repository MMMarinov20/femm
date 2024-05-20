import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  title: string;
  surrounding: { title: string; distance: string }[];
}

const Accordion: React.FC<Props> = ({ surrounding, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-4 py-10">
      <div className="bg-white rounded-lg shadow-xl">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-SolidenTrialBoldExpanded">{title}</h2>
          <IoIosArrowDown
            className={`h-6 w-6 transition-transform transform ${
              isOpen ? "rotate-180 text-[#FF6241]" : "rotate-0"
            }`}
          />
        </div>
        {isOpen && (
          <div className="p-4">
            <div className="flex flex-row w-full justify-between font-SolidenTrialRegular">
              {surrounding.map((item, index) => (
                <React.Fragment key={index}>
                  <h1>{item.title}</h1>
                  <h1 className="font-GilroyRegular">{item.distance}</h1>
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

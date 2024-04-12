import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  faq: { [key: string]: string };
}

const FaqBox: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const faqKey = Object.keys(props.faq)[0];
  const faqValue = props.faq[faqKey];

  return (
    <div className="w-full px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl">
        <div
          className="flex justify-between items-center p-10 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-SolidenTrialBoldExpanded">{faqKey}</h2>
          <IoIosArrowDown
            className={`h-6 w-6 transition-transform transform ${
              isOpen ? "rotate-180 text-[#FF6241]" : "rotate-0"
            }`}
          />
        </div>
        {isOpen && (
          <div className="px-10 pb-6">
            <div className="flex flex-row w-full justify-between font-SolidenTrialRegular">
              <h1>{faqValue}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqBox;

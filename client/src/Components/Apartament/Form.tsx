import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: {
    title: string;
    name: string;
    email: string;
    reason: string;
    phone: string;
    message: string;
    agree: string;
    button: string;
  };
}

const Form: React.FC<Props> = ({ Data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="px-4 py-20 w-screen lg:px-[10vw]" data-aos="fade-up">
        <div className="w-full shadow-2xl bg-white rounded-2xl p-7 lg:flex lg:flex-row lg:gap-x-10">
          <div className="flex flex-col md:justify-center md:items-center lg:items-start 2xl:justify-start lg:w-1/2">
            <h1 className="font-SolidenTrialBoldExpanded text-4xl 2xl:text-5xl text-center pt-5 overflow-hidden">
              {Data.title}
            </h1>
            <input
              placeholder={Data.name}
              className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 font-SolidenTrialRegular placeholder:font-SolidenTrialRegular"
            />
            <input
              placeholder={Data.email}
              type="email"
              className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 font-SolidenTrialRegular placeholder:font-SolidenTrialRegular"
            />
            <input
              placeholder={Data.reason}
              className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 font-SolidenTrialRegular placeholder:font-SolidenTrialRegular"
            />
            <input
              placeholder={Data.phone}
              className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 font-SolidenTrialRegular placeholder:font-SolidenTrialRegular"
            />
            <textarea
              placeholder={Data.message}
              className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 font-SolidenTrialRegular placeholder:font-SolidenTrialRegular min-h-[20vh]"
            />

            <div>
              <input
                name="agree"
                type="checkbox"
                className="my-4 text-[#FF6241] focus:outline-[#FF6241]"
                placeholder="I agree to the terms and conditions"
              />
              <label className="font-SolidenTrialRegular text-[#2A2A2A]">
                {" "}
                {Data.agree}
              </label>
            </div>

            <button className="bg-[#FF6241] font-SolidenTrialExpanded text-white rounded-lg py-3 w-[60%] md:w-1/3 lg:w-1/2">
              {Data.button}
            </button>
          </div>

          <div
            className="hidden lg:block lg:w-1/2 rounded-xl bg-[url('../../Apartament/Form.svg')] bg-cover bg-center bg-no-repeat
          "
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;

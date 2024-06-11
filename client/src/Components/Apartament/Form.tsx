import React, { useEffect, useRef } from "react";
import { apiService } from "../../services/apiService";
import { successToast, errorToast } from "../../utils/utils";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  Data: {
    Title: string;
    Name: string;
    Email: string;
    Reason: string;
    Phone: string;
    Message: string;
    Agree: string;
    Button: string;
  };
}

const Form: React.FC<Props> = ({ Data }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmission = async (e: any) => {
    e.preventDefault();
    const formRequest = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      reason: reasonRef.current?.value,
      phone: phoneRef.current?.value,
      message: messageRef.current?.value,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formRequest.email!)) {
      errorToast("Invalid email address", 2000);
      return;
    }

    if (
      formRequest.name === "" ||
      formRequest.email === "" ||
      formRequest.reason === "" ||
      formRequest.phone === "" ||
      formRequest.message === ""
    ) {
      errorToast("Please fill all fields", 2000);
      return;
    }
    try {
      const res = await apiService.post("/requests", formRequest);
      if (res) {
        successToast("Request submitted successfully", 2000);
        console.log(res);
      }
    } catch (error) {
      errorToast("Error submitting request", 2000);
      console.error("Error creating request:", error);
    }

    nameRef.current!.value =
      emailRef.current!.value =
      reasonRef.current!.value =
      phoneRef.current!.value =
      messageRef.current!.value =
        "";
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="px-4 py-20 w-screen lg:px-[10vw]" data-aos="fade-up">
        <div className="w-full shadow-2xl bg-white rounded-2xl p-7 lg:flex lg:flex-row lg:gap-x-10">
          <div className="flex flex-col md:justify-center md:items-center lg:items-start 2xl:justify-start lg:w-1/2">
            <form>
              <h1 className="font-SolidenTrialBoldExpanded text-4xl 2xl:text-5xl text-center pt-5 overflow-hidden">
                {Data.Title}
              </h1>
              <input
                placeholder={Data.Name}
                ref={nameRef}
                className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 placeholder:font-GilroyRegular"
              />
              <input
                placeholder={Data.Email}
                ref={emailRef}
                type="email"
                className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 placeholder:font-GilroyRegular"
              />
              <input
                placeholder={Data.Reason}
                ref={reasonRef}
                className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 placeholder:font-GilroyRegular"
              />
              <input
                placeholder={Data.Phone}
                ref={phoneRef}
                className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 placeholder:font-GilroyRegular"
              />
              <textarea
                placeholder={Data.Message}
                ref={messageRef}
                className="border-[1px] border-[#2A2A2A] focus:outline-none rounded-lg w-full md:w-1/2 lg:w-full p-4 my-4 placeholder:font-GilroyRegular min-h-[20vh]"
              />

              <div>
                <input
                  name="agree"
                  type="checkbox"
                  required
                  className="my-4 text-[#FF6241] focus:outline-[#FF6241]"
                  placeholder="I agree to the terms and conditions"
                />
                <label className="font-SolidenTrialRegular text-[#2A2A2A]">
                  {" "}
                  {Data.Agree}
                </label>
              </div>

              <button
                type="submit"
                onClick={handleSubmission}
                className="bg-[#FF6241] border-[1px] border-[#FF6241] hover:bg-white hover:text-[#FF6241] transition-colors duration-300 font-SolidenTrialExpanded text-white rounded-lg py-3 w-[60%] md:w-1/3 lg:w-1/2"
              >
                {Data.Button}
              </button>
            </form>
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

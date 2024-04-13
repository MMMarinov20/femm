import React from "react";
import Review from "./Review";
import { MdRateReview } from "react-icons/md";
import StarRating from "./StarRating";
import { useUser } from "../../hooks/useUser";

const ReviewsSection: React.FC = () => {
  const { user } = useUser();
  return (
    <React.Fragment>
      <h1 className="font-SolidenTrialBoldExpanded text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:px-[10vw] px-4">
        See what guests liked the most:
      </h1>

      <div className="flex flex-col lg:flex-row pt-10 pb-32">
        <div className="flex flex-col w-full lg:w-1/2">
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <div className="h-fit lg:w-1/2 bg-white shadow-2xl lg:mr-[10vw] mx-4 rounded-2xl p-5 flex flex-col gap-y-3 md:text-lg">
          <h1 className="font-SolidenTrialBoldExpanded text-2xl md:text-4xl">
            Write a review
          </h1>

          <h1 className="font-SolidenTrialRegular">
            Share your experience with other guests
          </h1>

          <div className="flex flex-col gap-y-5 pt-3">
            <div className="w-[100%] h-12 border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-center px-3">
              <MdRateReview className="text-2xl mr-3 text-[#FF6241]" />
              <select className="outline-none font-GilroyRegular w-full h-full">
                <option value="0">Select your reservation</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pt-3">
            <div className="w-[100%] h-[15vh] border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-start p-3">
              <MdRateReview className="text-2xl mr-3 text-[#FF6241]" />
              <textarea
                placeholder="Write a review"
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full h-full resize-none"
              />
            </div>
          </div>
          <StarRating />

          <button className="bg-[#FF6241] text-white font-SolidenTrialRegular text-lg rounded-lg py-3 transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]">
            {user.id ? "Submit" : "Sign in to submit"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewsSection;

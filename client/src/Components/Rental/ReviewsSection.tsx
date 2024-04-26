import React, { useEffect, useState, useRef } from "react";
import Review from "./Review";
import { MdRateReview } from "react-icons/md";
import StarRating from "./StarRating";
import { useUser } from "../../hooks/useUser";
import { submitReview } from "./../../services/reviewService";
import { Review as ReviewModel } from "../../models/Review";

interface Props {
  rentalId: number;
  name: string;
}

const ReviewsSection: React.FC<Props> = (props) => {
  const { user } = useUser();
  const [bookings, setBookings] = useState<any[]>([]);
  const [rating, setRating] = useState<number>(0);

  const reservationRef = useRef<HTMLSelectElement>(null);
  const reviewRef = useRef<HTMLTextAreaElement>(null);

  const updateRating = (rating: number) => setRating(rating);

  useEffect(() => {
    if (user.id) {
      const bookings = user.bookings.filter(
        (booking) => booking.rentalId === props.rentalId
      );
      setBookings(bookings);
    }
  }, [user.bookings, user.id, props.rentalId]);

  const handleReviewSubmission = async () => {
    if (!user.id) return;

    const reservationId = reservationRef.current?.value;
    const review = reviewRef.current?.value;

    if (reservationId == "0" || !review || !rating) return;
    const newReview: ReviewModel = {
      text: review,
      rating,
      userId: user.id,
      rentalId: props.rentalId,
    };

    try {
      await submitReview(newReview);
    } catch (error) {
      alert("Failed to submit review");
    }
  };

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
              <select
                ref={reservationRef}
                className="outline-none font-GilroyRegular w-full h-full"
              >
                <option value="0">Select your reservation</option>
                {bookings.map((booking) => (
                  <option key={booking.id} value={booking.id}>
                    {props.name} from{" "}
                    {new Date(booking.startDate).toDateString()} to{" "}
                    {new Date(booking.endDate).toDateString()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 pt-3">
            <div className="w-[100%] h-[15vh] border-[1px] border-[#8C8C8C] rounded-lg flex flex-row items-start p-3">
              <MdRateReview className="text-2xl mr-3 text-[#FF6241]" />
              <textarea
                ref={reviewRef}
                placeholder="Write a review"
                className="outline-none font-GilroyRegular placeholder:font-GilroyRegular w-full h-full resize-none"
              />
            </div>
          </div>
          <StarRating updateRating={updateRating} />

          <button
            onClick={handleReviewSubmission}
            className="bg-[#FF6241] text-white font-SolidenTrialRegular text-lg rounded-lg py-3 transition-colors duration-300 hover:bg-transparent hover:text-[#FF6241] hover:border-[#FF6241] hover:border-[1px]"
          >
            {user.id ? "Submit" : "Sign in to submit"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewsSection;

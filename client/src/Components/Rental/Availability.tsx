import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

const Availability: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="px-4 pb-32 w-full">
      <div className="py-5 shadow-2xl w-full px-4">
        <h1 className="font-SolidenTrialBoldExpanded text-4xl">Availability</h1>
        <DatePicker
          selected={startDate}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          excludeDates={[subDays(new Date(), 5), addDays(new Date(), 5)]}
          placeholderText="Select a date range"
          className="border-2 border-gray-300 rounded-lg p-2 mt-2 w-full"
          calendarClassName="rounded-lg shadow-lg"
          showPopperArrow
          isClearable
        />
      </div>
    </div>
  );
};

export default Availability;

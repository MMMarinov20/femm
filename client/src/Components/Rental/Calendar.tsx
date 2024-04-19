import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { createBooking } from "../../services/bookingService";
import { useUser } from "../../hooks/useUser";
import { Booking } from "../../models/Booking";
import { getAllBookings } from "../../services/bookingService";
import "react-day-picker/dist/style.css";

interface Props {
  range: DateRange | undefined;
}

const Calendar: React.FC<Props> = (props) => {
  const [range, setRange] = useState<DateRange | undefined>();

  useEffect(() => {
    setRange(props.range);
  }, [props.range]);

  return (
    <React.Fragment>
      <DayPicker
        defaultMonth={range?.from || new Date()}
        mode="range"
        selected={range}
        onSelect={setRange}
        // footer={footer}
        className="overflow-auto"
        disabled={[...excludedDates]}
      />
    </React.Fragment>
  );
};

export default Calendar;

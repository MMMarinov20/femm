import React, { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { createBooking } from "../../services/bookingService";
import { useUser } from "../../hooks/useUser";
import { Booking } from "../../models/Booking";
import { getAllBookings } from "../../services/bookingService";
import "react-day-picker/dist/style.css";

interface Props {
  date: DateRange | undefined;
  updateRange: (range: DateRange | undefined) => void;
}

const Calendar: React.FC<Props> = (props) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [bookings, setBookings] = useState<any[]>([]);
  const [excludedDates, setExcludedDates] = useState<Set<Date>>(
    new Set([new Date()])
  );

  useEffect(() => {
    setRange(props.date);
  }, [props.date]);

  useEffect(() => {
    getAllBookings().then((bookings) => {
      setBookings(bookings);
    });
  }, []);

  useEffect(() => {
    props.updateRange(range);
  }, [range]);

  useEffect(() => {
    const newExcludedDates = new Set<Date>(excludedDates);

    bookings.forEach((booking: any) => {
      const startDate = new Date(booking.startDate);
      const endDate = new Date(booking.endDate);
      if (endDate < new Date()) return;

      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        newExcludedDates.add(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    setExcludedDates(newExcludedDates);
  }, [bookings]);

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

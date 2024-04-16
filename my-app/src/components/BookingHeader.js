import React from "react";
import "./BookingFrom.css";

const BookingHeader = ({ totalBookedTickets }) => {
  return (
    <div>
      <h1>Movie Booking</h1>
      <p>Total Booked Tickets: {totalBookedTickets}</p>
    </div>
  );
};

export default BookingHeader;

import React, { useState } from "react";
import "./BookingFrom.css";

const SeatSearch = ({ bookings, onUpdateList }) => {
  const [searchSeat, setSearchSeat] = useState("");

  const handleSearch = (seatNumber) => {
    setSearchSeat(seatNumber.trim());
    const filtered = bookings.filter(
      (booking) => booking.seatNumber === seatNumber.trim()
    );
    onUpdateList(filtered);
  };

  return (
    <div id="seatsearch">
      <label>Find Slot: </label>
      <input
        type="text"
        value={searchSeat}
        onChange={(e) => handleSearch(e.target.value)}
        // placeholder="Type Seat Number"
      />
    </div>
  );
};

export default SeatSearch;

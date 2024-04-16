import React from "react";

const BookingList = ({ bookings, onEditBooking, onDeleteBooking }) => {
  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.username} - {booking.seatNumber}
            <button onClick={() => onEditBooking(booking)}>Edit</button>
            <button onClick={() => onDeleteBooking(booking)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

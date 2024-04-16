import React, { useState, useEffect } from "react";
import "./BookingFrom.css";
const BookingForm = ({
  bookings,
  onAddBooking,
  onEditBooking,
  editingBooking,
}) => {
  const [username, setUsername] = useState("");
  const [seatNumber, setSeatNumber] = useState("");

  useEffect(() => {
    if (editingBooking) {
      setUsername(editingBooking.username);
      setSeatNumber(editingBooking.seatNumber);
    } else {
      setUsername("");
      setSeatNumber("");
    }
  }, [editingBooking]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isSeatBooked = bookings.some(
      (booking) => booking.seatNumber === seatNumber
    );

    if (isSeatBooked) {
      alert(`Seat ${seatNumber} is already booked!`);
      return;
    }

    if (username.trim() === "" || seatNumber.trim() === "") {
      alert("Please enter both username and seat number.");
      return;
    }

    const newBooking = { username, seatNumber };
    if (editingBooking) {
      onEditBooking({ ...editingBooking, ...newBooking });
    } else {
      onAddBooking(newBooking);
    }

    // Reset form fields after submission
    setUsername("");
    setSeatNumber("");
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Seat Number:</label>
        <input
          type="text"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
        />
        <button id="bt" type="submit">
          {editingBooking ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

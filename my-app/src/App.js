import React, { useState } from "react";
import BookingHeader from "./components/BookingHeader";
import SeatSearch from "./components/SeatSearch";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
    setFilteredBookings([...bookings, newBooking]); // Update filtered bookings after adding
  };

  // const handleSearch = (seatNumber) => {
  //   if (seatNumber === "") {
  //     setFilteredBookings(bookings); // Reset to show all bookings if search input is empty
  //   } else {
  //     const filtered = bookings.filter(
  //       (booking) => booking.seatNumber === seatNumber
  //     );
  //     setFilteredBookings(filtered);
  //   }
  // };

  const handleEditBooking = (updatedBooking) => {
    const updatedBookings = bookings.map((booking) =>
      booking === editingBooking ? { ...updatedBooking } : booking
    );
    setBookings(updatedBookings);
    setFilteredBookings(updatedBookings); // Update filtered bookings after editing
    setEditingBooking(null); // Clear editing state
  };

  const handleDeleteBooking = (deletedBooking) => {
    const updatedBookings = bookings.filter(
      (booking) => booking !== deletedBooking
    );
    setBookings(updatedBookings);
    setFilteredBookings(updatedBookings); // Update filtered bookings after deleting
  };

  return (
    <div>
      <BookingHeader totalBookedTickets={bookings.length} />
      <SeatSearch bookings={bookings} onUpdateList={setFilteredBookings} />
      <BookingForm
        bookings={bookings}
        onAddBooking={handleAddBooking}
        editingBooking={editingBooking}
        onEditBooking={handleEditBooking}
      />
      <BookingList
        bookings={filteredBookings}
        onEditBooking={setEditingBooking}
        onDeleteBooking={handleDeleteBooking}
      />
    </div>
  );
};

export default App;

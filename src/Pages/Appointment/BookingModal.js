import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment,setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null)
  };

  return (
    <div>
      <input
        type="checkbox"
        id="booking-model"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            <p>Booking for : {name} </p>
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 pt-4 justify-items-center">
            <input
              type="text"
              readOnly
              placeholder={format(date, "PP")}
              className="input w-full text-black input-bordered max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input w-full input-bordered  max-w-xs"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered  max-w-xs"
            />
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              className="input w-full input-bordered  max-w-xs"
            />
            <input
              name="submit"
              type="submit"
              value="submit"
              className="input w-full btn-secondary  max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

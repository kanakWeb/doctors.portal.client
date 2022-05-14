import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);

  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();

    setTreatment(null);
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
            htmlFor="booking-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            <p>Booking for : {name} </p>
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 pt-4 justify-items-center"
          >
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
              {slots.map((slot,index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              readOnly
              value={user?.displayName || ''}
              className="input w-full input-bordered  max-w-xs"
            />

            <input
              name="email"
              type="text"
              readOnly
              value={user?.email || ''}
              className="input w-full input-bordered  max-w-xs"
            />

            <input
              type="phone"
              placeholder="Phone Number"
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

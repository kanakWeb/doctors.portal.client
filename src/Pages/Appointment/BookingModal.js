import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";


const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
  const [user, loading, error] = useAuthState(auth);

  const { _id, name, slots } = treatment;

  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    };
    console.log(booking);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if(data.success){
          toast(`Appointment is set,${formattedDate} at ${slot}`);
          }
          else{
            toast.error(`You already have and appointment on,${data.booking?.date} at ${data?.booking?.slot}`);
          }
          refetch()
          setTreatment(null);
        
      });
    
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="input w-full input-bordered  max-w-xs"
            />

            <input
              name="email"
              type="text"
              readOnly
              value={user?.email || ""}
              className="input w-full input-bordered  max-w-xs"
            />

            <input
              type="phone"
              name='phone'
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

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  // const [services, setService] = useState([]);

  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://serene-plains-16566.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  /* useEffect(() => {
    fetch(`https://serene-plains-16566.herokuapp.com/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [formattedDate]); */

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h4 className="text-center text-xl text-secondary font-bold py-12">
        Available appointment on : {format(date, "PP")}{" "}
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          key={treatment._id}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

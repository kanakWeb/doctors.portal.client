import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirm from "./DeleteConfirm";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
const [deletingDoctor,setDeletingDoctor]=useState(null)

  const {
    data: doctors,
    isLOading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    }).then((res) => res.json())
  );

  if (isLOading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors : {doctors?.length}</h2>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>No:</th>
            <th>Image</th>

            <th>Name</th>
            <th>specialty</th>
            <th>Remove Doctors</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor, index) => (
            <DoctorRow
              key={doctor._id}
              doctor={doctor}
              index={index}
              refetch={refetch}
              setDeletingDoctor={setDeletingDoctor}
            ></DoctorRow>
          ))}
        </tbody>
      </table>
      {deletingDoctor&&<DeleteConfirm
      deletingDoctor={deletingDoctor}
      refetch={refetch}
      setDeletingDoctor={setDeletingDoctor}
      ></DeleteConfirm>}
    </div>
  );
};

export default ManageDoctors;

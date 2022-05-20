import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch,setDeletingDoctor }) => {
  const { name, specialty, img, email } = doctor;

  
  return (
    <tr>
        <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt="doctor" />
          </div>
        </div>
      </td>
      
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
        
      </td>
    </tr>
  );
};

export default DoctorRow;

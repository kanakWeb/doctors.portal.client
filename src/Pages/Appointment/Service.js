import React from 'react';

const Service = ({service,setTreatment}) => {
    const{name,slots}=service
    return (
        
  <div className="card lg:max-w-lg bg-base-100  shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold text-secondary">{name}</h2>
    <p>{
        slots.length >0 ? <span>{slots[0]}</span>:<span className='text-red-500'>Try another day</span>
        }</p>
    <p>{slots.length} {slots.length>1?'Spaces':"Space"} Available</p>
    <div className="card-actions justify-center">
      <label for="booking-model"
      onClick={()=>setTreatment(service)}
      disabled={slots.length===0}
       className="btn my-5cmd btn-md btn-primary text-uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white ">Booking Treatment</label>
    </div>
  </div>
</div>

    );
};

export default Service;
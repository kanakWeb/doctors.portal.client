import React from 'react';

const InfoCard = ({img,cardTitle,textBody,bgColor}) => {

    return (
        <div className={`card lg:card-side bg-base-100   shadow-xl text-white ${bgColor}`}>
        <figure className='pl-5 pt-5'><img src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{textBody}</p>
        </div>
      </div>
    );
};

export default InfoCard;
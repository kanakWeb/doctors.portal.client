import React from 'react';

const InfoCard = ({img,cardTitle,textBody,bgColor}) => {

    return (
        <div className={`card p-2 m-2 lg:card-side bg-base-100   shadow-xl text-white ${bgColor}`}>
        <figure><img src={img} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{textBody}</p>
        </div>
      </div>
    );
};

export default InfoCard;
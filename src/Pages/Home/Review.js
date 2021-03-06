import React from "react";

const Review = ({ review }) => {
  const { name, img, location } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Vero repellat eligendi, minus laborum nisi quod?
        </p>
        <div className="flex  items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img  src={img} alt="img" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

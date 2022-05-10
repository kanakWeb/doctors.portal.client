import React from "react";
import chair from "../../assets/images/chair.png";
import backgroundImg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content px-12 flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">
            Your New Smile Starts here!
          </h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the
          </p>
          <button class="btn btn-primary text-uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

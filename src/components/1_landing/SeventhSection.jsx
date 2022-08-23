import React from "react";
import Puzzel from "../../assets/img/landingPage/landing-section-7.png";

const SeventhSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[85%] flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="md:flex-[0.4] ">
          <img
            src={Puzzel}
            alt=".."
            className="mb-5 md:mb-0 w-[60%] sm:w-[50%] md:w-[70%] 3xl:w-[60%]   mx-auto md:mx-0 md:mr-auto  "
          />
        </div>

        <p className="text-center md:text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold md:flex-[0.55] ">
          At Grothaa, we are an agency{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            without walls.
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SeventhSection;
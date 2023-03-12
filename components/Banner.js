import React from "react";
import Image from "next/image";
import hero from "../public/hero2.jpg";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[550px]  ">
      <Image src={hero} fill style={{ objectFit: "cover" }} />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white font-semibold">
          Thinking about where to go this vacation? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full  
        font-semibold my-3 hover:shadow-xl 
        active:scale-90 transition duration-150"
        >
          Hit me Up
        </button>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105
    transform transition duration-300 ease-in-out "
    >
      <div className="relative h-80 w-80 rounded-xl hover:shadow-lg">
        <Image className="rounded-xl" src={img} fill />
      </div>
      <h3 className="text-2xl mt-3 font-medium">{title}</h3>
    </div>
  );
}

export default MediumCard;

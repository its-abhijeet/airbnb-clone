import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          className="rounded-2xl"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="font-light">{description}</p>
        <button
          className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5
            hover:scale-105 transform transition duration-200 ease-in-out hover:shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;

import React from "react";
import {
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
} from "../assets";

export default function Clients() {
  const imagenes = [
    { src: image31, alt: "Image 31" },
    { src: image32, alt: "Image 32" },
    { src: image33, alt: "Image 33" },
    { src: image34, alt: "Image 34" },
    { src: image35, alt: "Image 35" },
    { src: image36, alt: "Image 36" },
    { src: image37, alt: "Image 37" },
  ];

  return (
    <div className="w-screen mt-24 text-center">
      <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        PARTNERS
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {imagenes.map((imagen, index) => (
          <div key={index} className="w-full">
            <img
              src={imagen.src}
              alt={imagen.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

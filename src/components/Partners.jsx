import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Ajusta la velocidad de transición
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Ajusta la velocidad de reproducción automática
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen mt-24 text-center">
      <h2 className="font-semibold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        PARTNERS
      </h2>
      <Slider {...settings} style={{ pointerEvents: "none" }}>
        {imagenes.map((imagen, index) => (
          <div key={index} className="w-full">
            <img src={imagen.src} alt={imagen.alt} className="w-full"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

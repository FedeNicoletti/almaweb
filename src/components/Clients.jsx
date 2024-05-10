import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
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
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
    { src: image8, alt: "Image 8" },
    { src: image9, alt: "Image 9" },
    { src: image10, alt: "Image 10" },
    { src: image11, alt: "Image 11" },
    { src: image12, alt: "Image 12" },
    { src: image13, alt: "Image 13" },
    { src: image14, alt: "Image 14" },
    { src: image15, alt: "Image 15" },
    { src: image16, alt: "Image 16" },
    { src: image17, alt: "Image 17" },
    { src: image18, alt: "Image 18" },
    { src: image19, alt: "Image 19" },
    { src: image20, alt: "Image 20" },
    { src: image21, alt: "Image 21" },
    { src: image22, alt: "Image 22" },
    { src: image23, alt: "Image 23" },
    { src: image24, alt: "Image 24" },
    { src: image25, alt: "Image 25" },
    { src: image26, alt: "Image 26" },
    { src: image27, alt: "Image 27" },
    { src: image28, alt: "Image 28" },
    { src: image29, alt: "Image 29" },
    { src: image30, alt: "Image 30" },
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
      <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        CLIENTES
      </h2>
      <Slider {...settings} style={{ pointerEvents: "none" }}>
        {imagenes.map((imagen, index) => (
          <div key={index} className="w-full">
            <img src={imagen.src} alt={imagen.alt} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

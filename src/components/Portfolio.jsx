import React, { useState } from "react";

export default function Portfolio() {
  const [filtro, setFiltro] = useState("Todos");

  const handleClick = (filtro) => {
    setFiltro(filtro);
  };

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const imagenes = [
    {
      id: 1,
      alt: "Imagen 1",
      src: "https://via.placeholder.com/300",
      categoria: "Arquitectura y Diseño Comercial",
    },
    {
      id: 2,
      alt: "Imagen 2",
      src: "https://via.placeholder.com/300",
      categoria: "Arquitectura y Diseño Comercial",
    },
    {
      id: 3,
      alt: "Imagen 3",
      src: "https://via.placeholder.com/300",
      categoria: "Acciones BTL y Eventos",
    },
    {
      id: 4,
      alt: "Imagen 4",
      src: "https://via.placeholder.com/300",
      categoria: "Acciones BTL y Eventos",
    },
    {
      id: 5,
      alt: "Imagen 5",
      src: "https://via.placeholder.com/300",
      categoria: "Trade Marketing",
    },
    {
      id: 6,
      alt: "Imagen 6",
      src: "https://via.placeholder.com/300",
      categoria: "Trade Marketing",
    },
    {
      id: 7,
      alt: "Imagen 7",
      src: "https://via.placeholder.com/300",
      categoria: "Producción y Logística",
    },
    {
      id: 8,
      alt: "Imagen 8",
      src: "https://via.placeholder.com/300",
      categoria: "Producción y Logística",
    },
    {
      id: 9,
      alt: "Imagen 9",
      src: "https://via.placeholder.com/300",
      categoria: "Recursos Humanos",
    },
    {
      id: 10,
      alt: "Imagen 10",
      src: "https://via.placeholder.com/300",
      categoria: "Recursos Humanos",
    },
    {
      id: 11,
      alt: "Imagen 11",
      src: "https://via.placeholder.com/300",
      categoria: "Recursos Humanos",
    },
    {
      id: 12,
      alt: "Imagen 12",
      src: "https://via.placeholder.com/300",
      categoria: "Recursos Humanos",
    },
  ];

  const filtrarImagenes = (imagen) => {
    if (filtro === "Todos") return true;
    return imagen.categoria === filtro;
  };

  return (
    <>
      <div className="mt-8 flex flex-col justify-between items-center w-screen">
        <h2 className="mt-8 font-bold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
          PORTFOLIO
        </h2>
      </div>
      <div className="w-screen mx-auto">
        <div className="flex flex-col md:flex-row justify-center mb-12">
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Todos" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Todos")}
          >
            <p className="text-base md:text-lg">TODOS</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Arquitectura y Diseño Comercial"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Arquitectura y Diseño Comercial")}
          >
            <p className="text-base md:text-lg">ARQ Y DISEÑO</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Marketing Digital" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Marketing Digital")}
          >
            <p className="text-base md:text-lg">MKT DIGITAL</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Acciones BTL y Eventos"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Acciones BTL y Eventos")}
          >
            <p className="text-base md:text-lg">BTL Y EVENTOS</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Trade Marketing" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Trade Marketing")}
          >
            <p className="text-base md:text-lg">TRADE MKT</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Producción y Logística"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Producción y Logística")}
          >
            <p className="text-base md:text-lg">PRODUCCIÓN Y LOGÍSTICA</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Recursos Humanos" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Recursos Humanos")}
          >
            <p className="text-base md:text-lg">RR HH</p>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {imagenes.map((imagen, index) => (
            <div
              key={index}
              className="aspect-w-4 aspect-h-3 relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ display: filtrarImagenes(imagen) ? "block" : "none" }}
            >
              <img
                alt={imagen.alt}
                className="object-cover w-full h-full"
                src={imagen.src}
              />

              {hoveredImage === index && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center">
                  <div>
                    <p className="font-bold">{imagen.alt}</p>
                    <p className="text-sm">{imagen.categoria}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

export default function Portfolio() {
  const [filtro, setFiltro] = useState("Todos");

  const handleClick = (filtro) => {
    setFiltro(filtro);
  };

  const filtrarImagenes = (imagen) => {
    if (filtro === "Todos") return true;
    return imagen.alt.includes(filtro);
  };

  return (
    <>
      <div className="mt-8 flex flex-col justify-between items-center w-screen">
        <h2 className="mt-8 font-semibold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
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
            <p className="text-base md:text-lg">Todos</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Arquitectura y Diseño Comercial"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Arquitectura y Diseño Comercial")}
          >
            <p className="text-base md:text-lg">
              Arquitectura y Diseño Comercial
            </p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Acciones BTL y Eventos"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Acciones BTL y Eventos")}
          >
            <p className="text-base md:text-lg">Acciones BTL y Eventos</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Trade Marketing" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Trade Marketing")}
          >
            <p className="text-base md:text-lg">Trade Marketing</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Producción y Logística"
                ? "text-pink-500"
                : "text-gray-600"
            }`}
            onClick={() => handleClick("Producción y Logística")}
          >
            <p className="text-base md:text-lg">Producción y Logística</p>
          </button>
          <button
            className={` rounded px-2 py-2 bg-transparent mb-2 md:mr-2 ${
              filtro === "Recursos Humanos" ? "text-pink-500" : "text-gray-600"
            }`}
            onClick={() => handleClick("Recursos Humanos")}
          >
            <p className="text-base md:text-lg">Recursos Humanos</p>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {imagenes.map(
            (imagen, index) =>
              filtrarImagenes(imagen) && (
                <div key={index} className="aspect-w-4 aspect-h-3">
                  <img
                    alt={imagen.alt}
                    className="object-cover w-full h-full"
                    src={imagen.src}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

const imagenes = [
  {
    alt: "Arquitectura y Diseño Comercial",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Acciones BTL y Eventos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Trade Marketing",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Producción y Logistica",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Producción y Logística",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Producción y Logística",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  // Agrega más imágenes con sus respectivos atributos alt y src
];

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Carousel = ({ sliderImages = [], texts = [] }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? sliderImages.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === sliderImages.length - 1 ? 0 : curr + 1));

  if (!sliderImages.length || !texts.length) {
    return <div>No hay imágenes o textos para mostrar.</div>;
  }

  return (
    <div className="w-screen overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {sliderImages}
      </div>

      {/* Contenedor de texto sobre la imagen */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-auto">
        {/* Contenedor de texto */}
        {curr >= 1 && curr < texts.length + 1 && (
          <div className="block text-white text-4xl font-bold rounded-lg mb-4 ml-auto pr-20">
            <p className="font-light">{texts[curr - 1]?.line1}</p>
            <p className="font-extrabold">{texts[curr - 1]?.line2}</p>
          </div>
        )}

        {/* Contenedor de "Ver Proyecto" */}
        {curr >= 1 && curr < texts.length + 1 && (
          <div className="ml-auto z-50">
            <a
              href={texts[curr - 1]?.link || "#"} // Asegúrate de tener un enlace válido
              rel="noopener noreferrer"
              className="block text-xl font-medium text-yellow-400 mb-32 ml-auto pb-2 pr-28 hover:underline"
            >
              VER PROYECTO
            </a>
          </div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

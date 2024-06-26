import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const Carousel = ({ children: sliderImages }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? sliderImages.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === sliderImages.length - 1 ? 0 : curr + 1));
  return (
    <div className="w-screen overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {sliderImages}
      </div>
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
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {sliderImages.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-7 h-1 bg-white rounded-full ${
                curr === i ? "p-1" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

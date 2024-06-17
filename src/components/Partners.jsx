import {
  image31,
  image32,
  image33,
  image34,
  image35,
  image37,
} from "../assets";

export default function Clients() {
  const imagenes = [
    { src: image31, alt: "Image 31" },
    { src: image32, alt: "Image 32" },
    { src: image33, alt: "Image 33" },
    { src: image34, alt: "Image 34" },
    { src: image35, alt: "Image 35" },
    { src: image37, alt: "Image 37" },
  ];

  return (
    <>
      <div className="w-screen mt-24 text-center mb-12 md:ml-56 md:text-start">
        <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
          PARTNERS
          <h2 className="font-normal mt-3 text-2xl md:text-3xl tracking-widest text-[#303030]">
            NUESTROS PARTNERS, ALIANZAS ESTRATÉGICAS
          </h2>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-24 md:px-16">
          {imagenes.map((imagen, index) => (
            <div key={index} className="w-full p-4 md:p-12">
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

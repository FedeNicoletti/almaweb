import { pelotitassvg } from "../assets";

const Business = () => (
  <section
    id="features"
    className="w-screen mt-36 relative h-96 flex items-center justify-center overflow-hidden mb-36"
    style={{
      backgroundImage: `url(${pelotitassvg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-x-0 bottom-16 flex items-end justify-center pb-4">
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="font-montserrat text-black font-normal text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-snug w-full">
          <b>ESTAMOS PREPARADOS</b> <br /> PARA LO QUE SU{" "}
          <b>EMPRESA NECESITE</b>
        </h2>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-full"></div>
    </div>
  </section>
);

export default Business;

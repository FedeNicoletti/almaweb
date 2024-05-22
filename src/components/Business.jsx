import { pelotitas } from "../assets";

const Business = () => (
  <section
    id="features"
    className="w-screen mt-36 relative h-96 flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${pelotitas})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 flex items-start justify-center">
      <div className="text-center">
        <h2 className="top-0 font-montserrat text-black font-normal xs:text-[46px] text-[56px] xs:leading-[86.8px] leading-[76.8px] w-full">
          <b>SOMOS PROFESIONALES</b> <br /> AL SERVICIO DE <b>PROFESIONALES</b>
        </h2>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-full"></div>
    </div>
  </section>
);

export default Business;

import { featuresServicios } from "../constants";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-col items-center p-4 md:p-6 rounded-lg mb-6 md:mb-0 md:mr-6 feature-card">
    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center mb-4 md:mb-6">
      <img
        src={icon}
        alt="iconos"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-lg text-center md:text-xl mb-2 text-[#303030]">
        {title}
      </h4>
      <p className="text-center font-normal text-base md:text-lg text-[#595959]">
        {content}
      </p>
    </div>
  </div>
);

const Servicios = () => (
  <section id="features" className="mt-8 md:mt-24 flex flex-col items-center">
    <div className="max-w-xl mt-5 text-center">
      <h2 className="font-semibold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        SERVICIOS
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:max-w-6xl">
      {featuresServicios.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Servicios;

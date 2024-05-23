import { featuresServicios } from "../constants";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-col items-center p-4 md:p-6 rounded-lg md:mb-0 md:mr-6 feature-card">
    <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
      <img
        src={icon}
        alt="iconos"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4
        className="font-bold text-center md:text-xl mb-2 text-[#303030]"
        style={{ fontSize: "0.7rem" }}
      >
        {title}
      </h4>
      <p className="text-center font-normal text-base md:text-lg text-[#595959]">
        {content}
      </p>
    </div>
  </div>
);

const Servicios = () => (
  <section id="features" className="mt-8 md:mt-24 flex flex-col items-start">
    <div className="max-w-xl mt-5 text-center md:ml-56 md:text-start">
      <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        SERVICIOS
      </h2>
      <h2 className="font-normal text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        ¿QUÉ Y CÓMO LO HACEMOS?
      </h2>
      <p className="text-sm md:text-lg text-[#595959]">
        Nuestra motivación es encontrar una idea que transforme, que contagie
        sensaciones. Resolvemos todos los problemas de forma creativa y eficaz.
        <br />
        Disfrutamos de vincularnos con nuestros clientes: somos el brazo
        ejecutor y creativo que tu empresa necesita. Todos los proyectos son
        bienvenidos: chicos, medianos, grandes, y ¡desde cualquier lugar del
        país!
      </p>
    </div>
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:max-w-6xl">
        {featuresServicios.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;

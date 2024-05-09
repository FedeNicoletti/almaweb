import { features } from "../constants";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-col items-center p-4 md:p-6 rounded-lg mb-6 md:mb-0 md:mr-6 feature-card">
    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center mb-4 md:mb-6">
      <img
        src={icon}
        alt="star"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-lg md:text-xl mb-2">{title}</h4>
      <p className="text-center font-normal text-base md:text-lg">{content}</p>
    </div>
  </div>
);

const Agencia = () => (
  <section id="features" className="mt-8 md:mt-24 flex flex-col items-center">
    <div className="max-w-xl mt-5 text-center">
      <h2 className="font-semibold text-2xl md:text-3xl mb-4 md:mb-5 tracking-widest text-[#303030]">
        AGENCIA
      </h2>
      <p className="text-base md:text-lg text-[#595959]">
        Somos una agencia con más de 20 años desarrollando soluciones
        comerciales y creativas para todo tipo de empresas y eventos en
        Argentina. Un equipo multidisciplinario compuesto por licenciados en
        marketing y administración, diseñadores gráficos e industriales,
        fotógrafos y filmmakers, entre otros.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-center">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Agencia;

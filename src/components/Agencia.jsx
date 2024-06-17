import { features } from "../constants";

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-col items-center p-4 md:p-6 rounded-lg mb-6 md:mb-0 md:mr-6 feature-card">
    <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
      <img
        src={icon}
        alt="star"
        className="w-10 h-10 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4
        className="font-semibold text-base md:text-xl"
        style={{ fontSize: "1rem", letterSpacing: "1px" }}
      >
        {title}
      </h4>
      {/*<p className="text-center font-normal text-base md:text-lg">{content}</p>*/}
    </div>
  </div>
);

const Agencia = () => (
  <section id="features" className="mt-8 md:mt-24 flex flex-col items-center">
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full max-w-6xl px-2 md:px-8">
      <div className="md:w-1/2 mt-5 text-center md:text-left mb-8 md:mb-0">
        <h2 className="font-semibold text-2xl md:text-3xl mb-8 tracking-widest text-[#303030]">
          AGENCIA
        </h2>
        <h2 className="font-normal text-2xl md:text-3xl mb-8 tracking-widest text-[#303030]">
          ¿QUIÉNES SOMOS?
        </h2>
        <p className="text-sm md:text-lg text-[#595959]">
          <span
            className="font-bold"
            style={{
              display: "block",
              marginBottom: "1.5rem",
              fontSize: "18px",
            }}
          >
            Somos una agencia con más de 20 años desarrollando soluciones
            comerciales y creativas para todo tipo de empresas y eventos en
            Argentina.
          </span>
          <span
            style={{
              display: "block",
              marginBottom: "1.5rem",
              fontSize: "18px",
            }}
          >
            Un equipo multidisciplinario compuesto por licenciados en marketing
            y administración, diseñadores gráficos e industriales, fotógrafos y
            filmmakers, entre otros.
          </span>
          <span
            style={{
              display: "block",
              marginBottom: "1.5rem",
              fontSize: "18px",
            }}
          >
            Vivimos en una evolución constante que también nos hace versátiles y
            sumamente adaptables. La innovación es parte de nuestro core
            business.
          </span>
          <span style={{ display: "block", fontSize: "18px" }}>
            No entendemos límites o problemas: Siempre existe una solución.
            Respondemos ante todas las necesidades con velocidad y precisión.
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Agencia;

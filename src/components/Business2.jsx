const Business = () => (
  <section
    id="features"
    className="w-screen mt-24 mb-8 relative bg-cover bg-center min-h-72 flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    }}
  >
    {/* Capa de fondo semi-transparente */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h2
          className="font-montserrat text-[#131d26] font-semibold xs:text-[46px] text-[32px] xs:leading-[76.8px] leading-[66.8px] w-full"
          style={{ color: "#A2B2CB" }}
        >
          ¿ESTÁS LISTO PARA EMBARCARTE CON NOSOTROS?
        </h2>
      </div>
    </div>
  </section>
);

export default Business;

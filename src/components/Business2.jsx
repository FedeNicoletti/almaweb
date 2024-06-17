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
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="font-montserrat text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-normal w-full">
          ¿ESTÁS LISTO PARA EMBARCARTE CON NOSOTROS?
        </h2>
      </div>
    </div>
  </section>
);

export default Business;

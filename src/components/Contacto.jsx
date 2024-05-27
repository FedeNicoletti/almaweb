import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    queryReason: "", // Nuevo campo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    e.target.blur(); // Quitar el enfoque del select después de seleccionar una opción
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      queryReason: "",
    });
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex justify-center mt-5 text-center">
        <h2 className="font-bold text-2xl md:text-3xl tracking-widest text-[#303030]">
          CONTACTO
        </h2>
      </div>
      <section
        id="features"
        className="w-screen mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center"
      >
        <div className="w-full md:w-1/2 flex justify-center items-center py-8">
          <p className="ml-4 md:ml-12 text-start md:text-lg">
            Completá el siguiente formulario y dejanos tu consulta. En breve nos
            comunicaremos con vos. <br />
            <br />
            <br />
            <br />
            <b> DATOS OFICINAS:</b>
            <br /> Julio A. Roca 2420 (B7602GUX) - Mar del Plata
            <br /> R. Escalada de San Martín 2749 OF. 275 (C1406HCC) - CABA{" "}
            <br />
            <b>TELÉFONOS:</b>
            <br /> +54 9223 3045424
            <br /> +54 911 2468.2389
            <br />
            <b>EMAIL:</b>
            <br /> info@almabtl.com
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Nombre"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Teléfono"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6 relative">
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="queryReason"
                  value={formData.queryReason}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="" disabled hidden>
                    Motivo de tu consulta
                  </option>
                  <option value="Trabajar con ustedes">
                    Quiero trabajar con ustedes
                  </option>
                  <option value="Ser partner">Quiero ser partner</option>
                  <option value="Ser cliente">Quiero ser cliente</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  {/* Flecha hacia abajo */}
                  <svg
                    className="w-6 h-6 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center justify-start">
                <button
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

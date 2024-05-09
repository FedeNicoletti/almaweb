import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="features"
      className="mt-8 md:mt-24 flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center py-8">
        <p className="text-center md:text-lg">
          Completá el siguiente formulario y dejanos tu consulta. En breve nos
          comunicaremos con vos. <br /> Nuestra Agencia:
          <br /> Julio A. Roca 2420 (B7602GUX) - Mar del Plata
          <br /> R. Escalada de San Martín 2749 OF. 275 (C1406HCC) - CABA <br />
          Teléfonos:
          <br /> M: +549 223 3045424
          <br /> M: +549 11 2468.2389
        </p>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
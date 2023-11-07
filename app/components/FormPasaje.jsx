"use client";

import { useState } from "react";

const FormPasaje = ({ createCheque }) => {
  const [listado, setListado] = useState({
    nombre: "",
    fecha: "",
    estado: "",
    destino: "",
  });

  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setListado({
      ...listado,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, fecha, destino, estado } = listado;

  const handleSubmit = (e) => {
    e.preventDefault();

    // ID
    setId(id + 1);
    listado.id = id;

    // Crear cheque
    createCheque(listado);

    // Reset FormPasaje
    setListado({
      nombre: "",
      fecha: "",
      estado: "",
      destino: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-6 pt-7 text-white text-lg rounded-lg border w-[500px] flex justify-center flex-col gap-6">
        <div className="flex justify-between">
          <label htmlFor="nombre" className="inline-block">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fecha" className="inline-block">
            Fecha:
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            onChange={handleChange}
            value={fecha}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="destino" className="inline-block">
            Destino:
          </label>
          <input
            type="text"
            id="destino"
            name="destino"
            onChange={handleChange}
            value={destino}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="estado" className="inline-block">
            Estado (1 - 2):
          </label>
          <input
            type="text"
            id="estado"
            name="estado"
            onChange={handleChange}
            value={estado}
          />
        </div>
        <button
          type="submit"
          onChange={handleChange}
          className="w-fit border mx-auto px-6 p-1 rounded-lg"
        >
          Listo
        </button>
      </div>
    </form>
  );
};

export default FormPasaje;

"use client";

import { useState } from "react";

const Form = ({ createCheque }) => {
  const [listado, setListado] = useState({
    idCheque: "",
    fecha: "",
    receptor: "",
    idBanco: "",
    estado: "",
    emisor: "",
  });

  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setListado({
      ...listado,
      [e.target.name]: e.target.value,
    });
  };

  const { idCheque, fecha, receptor, emisor, idBanco, estado } = listado;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asdsa");

    // ID

    setId(id + 1);
    listado.id = id;

    // Create Appointment
    createCheque(listado);

    // Reset Form
    setListado({
      idCheque: "",
      fecha: "",
      receptor: "",
      idBanco: "",
      estado: "",
      emisor: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 py-6 pt-7 text-white text-lg rounded-lg border w-[500px] flex justify-center flex-col gap-6">
        <div className="flex justify-between">
          <label htmlFor="idCheque" className="inline-block">
            ID Cheque:
          </label>
          <input
            type="text"
            id="idCheque"
            name="idCheque"
            onChange={handleChange}
            value={idCheque}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="fecha" className="inline-block">
            Fecha Emicion:
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
          <label htmlFor="dni" className="inline-block">
            DNI Receptor:
          </label>
          <input
            type="text"
            id="dni"
            name="receptor"
            onChange={handleChange}
            value={receptor}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="emisor" className="inline-block">
            DNI Emisor:
          </label>
          <input
            type="text"
            id="emisor"
            name="emisor"
            onChange={handleChange}
            value={emisor}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="idBanco" className="inline-block">
            ID Banco:
          </label>
          <input
            type="text"
            id="idBanco"
            name="idBanco"
            onChange={handleChange}
            value={idBanco}
          />
        </div>
        {/* <div className="flex justify-between">
          <label htmlFor="estado" className="inline-block">
            Estado:
          </label>
          <input
            type="text"
            id="estado"
            name="estado"
            onChange={handleChange}
            value={estado}
          />
        </div> */}
        <div className="flex justify-between">
          <label>Estado:</label>
          <select name="estado" onChange={handleChange}>
            <option value={true}>Concretado</option>
            <option value={false}>En progreso</option>
          </select>
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

export default Form;

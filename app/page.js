"use client";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function Home() {
  const [lista, setLista] = useState([]);

  const createCheque = (cheque) => {
    setLista([...lista, cheque]);
  };

  const deleteCheque = (id) => {
    const newLista = lista.filter((cheque) => cheque.id !== id);
    setLista(newLista);
  };

  return (
    <main className="py-10 max-w-[1200px] mx-auto">
      <h1 className="text-center text-4xl mb-10 font-semibold text-white border w-fit mx-auto px-6 py-3 rounded-lg">
        Sistema de cobro de cheques
      </h1>
      <div className="flex justify-between">
        <Form createCheque={createCheque} />

        {/* <div className="CURRENT CARD border max-w-lg w-full h-fit rounded-lg text-lg py-6 px-5 bg-white shadow-xl">
          <h2 className="text-center mb-4">
            BANCO: <span className="font-bold">BBVA</span>
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <label htmlFor="cardFecha">ID Cheque: </label>
              <input type="text" id="cardFecha" className="border" />
            </div>
            <div className="flex justify-between">
              <label>Fecha Emicion: </label>
              <input type="date" className="border" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="cardDNI">DNI Receptor:</label>
              <input type="text" id="cardDNI" className="border" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="cardBanco">ID Banco:</label>
              <input type="text" id="cardBanco" className="border" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="estado" className="inline-block">
                Estado:
              </label>
              <select id="estado" className="border">
                <option value={false} selected>
                  En progreso
                </option>
                <option value={true}>Concretado</option>
              </select>
            </div>
            <button className="w-fit border mx-auto px-6 p-1 rounded-lg bg-blue-900 text-white">
              Listo
            </button>
          </div>
        </div> */}
        <div className="flex flex-col gap-0">
          {lista.map((cheque) => (
            <List key={cheque.id} cheque={cheque} deleteCheque={deleteCheque} />
          ))}
        </div>
      </div>
    </main>
  );
}

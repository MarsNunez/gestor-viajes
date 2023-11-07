"use client";
import { useState } from "react";
import FormPasaje from "./components/FormPasaje";
import ListPasaje from "./components/ListPasaje";
import Header from "./components/Header";

export default function App() {
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
      <Header />
      <div className="flex justify-between">
        <FormPasaje createCheque={createCheque} />
        <div className="flex flex-col gap-0">
          {lista.map((cheque) => (
            <ListPasaje
              key={cheque.id}
              cheque={cheque}
              deleteCheque={deleteCheque}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

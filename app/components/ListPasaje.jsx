const ListPasaje = ({ cheque, deleteCheque }) => {
  return (
    <div className="w-full max-w-[700px] bg-white rounded-lg shadow-lg mx-auto mt-20">
      <div className="py-6 px-10 text-lg">
        <h2 className="text-center mb-5 text-xl">
          Nro de viaje: <span className="font-bold">{cheque.id + 1}</span>
        </h2>
        <div className="flex gap-36">
          <div className="flex flex-col">
            <p className="inline-block font-bold">
              Nombre: <span className="font-normal">{cheque.nombre}</span>
            </p>
            <p className="inline-block font-bold">
              Fecha: <span className="font-normal">{cheque.fecha}</span>
            </p>
            <p className="inline-block font-bold">
              Destino: <span className="font-normal">{cheque.destino}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="inline-block font-bold">
              Estado:{" "}
              <span
                className={`font-normal ${
                  cheque.estado == "1" ? "text-blue-700" : "text-red-700"
                }`}
              >
                {cheque.estado == "1" ? "Concretado" : "En Progreso"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-7 mt-5">
          <button
            onClick={() => deleteCheque(cheque.id)}
            className="px-4  py-1 rounded-lg border-2 border-red-700 bg-red-500 text-white"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListPasaje;

const List = ({ cheque, deleteCheque }) => {
  return (
    <div className="w-full max-w-[700px] bg-white rounded-lg shadow-lg mx-auto mt-20">
      <div className="py-6 px-10 text-lg">
        <h2 className="text-center mb-5 text-xl">
          BANCO: <span className="font-bold">BBVA</span>
        </h2>
        <div className="flex gap-36">
          <div className="flex flex-col">
            <p className="inline-block font-bold">
              ID Cheque: <span className="font-normal">{cheque.idCheque}</span>
            </p>
            <p className="inline-block font-bold">
              Fecha Emición: <span className="font-normal">{cheque.fecha}</span>
            </p>
            <p className="inline-block font-bold">
              DNI Emisor: <span className="font-normal">{cheque.emisor}</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="inline-block font-bold">
              ID Banco: <span className="font-normal">{cheque.idBanco}</span>
            </p>
            <p className="inline-block font-bold">
              Estado:{" "}
              <span
                className={`font-normal ${
                  cheque.estado == "true" ? "text-blue-700" : "text-red-700"
                }`}
              >
                {cheque.estado == "true" ? "Concretado" : "En Progreso"}
              </span>
            </p>
            <p className="inline-block font-bold">
              DNI Receptor:{" "}
              <span className="font-normal">{cheque.receptor}</span>
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

export default List;

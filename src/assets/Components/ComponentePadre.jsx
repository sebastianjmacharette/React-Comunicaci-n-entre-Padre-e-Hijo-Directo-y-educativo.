import React, { useState } from "react";
import ComponenteHijo from "./ComponenteHijo";

const ComponentePadre = () => {
  const [datos, setDatos] = useState({ nombre: "Sebastián", edad: 30 });
  const [mostrarModal, setMostrarModal] = useState(false);

  const actualizarDatos = (nuevoDato) => {
    setDatos(nuevoDato);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Datos del usuario</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 w-80 text-center">
        <p className="text-lg font-semibold">Nombre: <span className="text-gray-700">{datos.nombre}</span></p>
        <p className="text-lg font-semibold">Edad: <span className="text-gray-700">{datos.edad}</span></p>
      </div>
      <button
        onClick={() => setMostrarModal(true)}
        className="mt-4 bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 transition"
      >
        Editar datos
      </button>

      {mostrarModal && (
        <ComponenteHijo datos={datos} actualizarDatos={actualizarDatos} cerrarModal={() => setMostrarModal(false)} />
      )}
    </div>
  );
};

export default ComponentePadre;

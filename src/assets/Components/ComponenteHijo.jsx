import React, { useState } from "react";

const ComponenteHijo = ({ datos, actualizarDatos, cerrarModal }) => {
  const [nuevoNombre, setNuevoNombre] = useState(datos.nombre);
  const [nuevaEdad, setNuevaEdad] = useState(datos.edad);

  const manejarCambio = () => {
    actualizarDatos({ nombre: nuevoNombre, edad: nuevaEdad });
    cerrarModal(); // Cerrar el modal después de actualizar los datos
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold text-blue-600 mb-2 text-center">Actualizar datos</h2>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nuevo nombre"
          />
          <input
            type="number"
            value={nuevaEdad}
            onChange={(e) => setNuevaEdad(Number(e.target.value))}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nueva edad"
          />
          <button
            onClick={manejarCambio}
            className="bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Actualizar
          </button>
          <button
            onClick={cerrarModal}
            className="mt-2 bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponenteHijo;

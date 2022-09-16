import React, { useState } from "react";

const Colaborador = ({ colaboradores, setColaboradores }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  // controladores de evento
  const handleOnChangeNombre = (event) => setNombre(event.target.value);
  const handleOnChangeCorreo = (event) => setCorreo(event.target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const nuevoColaborador = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
    };
    if (!nombre || !correo) {
      return alert("Debes llenar los campos");
    }
    setColaboradores([...colaboradores, nuevoColaborador]);
    setNombre("");
    setCorreo("");
    document.getElementById("nombre").focus();
  };

  return (
    <div className="col-10 col-md-6 col-lg-4 mx-auto">
      <form
        className="mb-4 p-3 border border-1 border-secondary rounded text-start"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3 form-floating">
          <input
            id="nombre"
            type="text"
            className="form-control"
            value={nombre}
            placeholder="Nombre colaborador"
            onChange={handleOnChangeNombre}
          />
          <label htmlFor="nombre">Nombre del colaborador</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="email"
            name="correo"
            className="form-control"
            value={correo}
            placeholder="Correo colaborador"
            onChange={handleOnChangeCorreo}
          />
          <label htmlFor="correo">Correo electrónico</label>
        </div>
        <button type="submit" className="w-100 btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Colaborador;

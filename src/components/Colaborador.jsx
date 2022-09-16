import React, { useState } from "react";

const Colaborador = ({colaboradores, setColaboradores}) => {
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
      correo: correo
    }
    if(!nombre || !correo){
      return alert("Debes llenar los campos");
    }
    setColaboradores([...colaboradores, nuevoColaborador]);
    console.log(colaboradores);
    setNombre("");
    setCorreo("");
  }

  return (
    <form className="mb-4 p-3 border border-3 border-info rounded text-start"
          onSubmit={handleOnSubmit}>
      <div className="mb-2">
        <label htmlFor="nombre" className="mb-1">Nombre del colaborador</label>
        <input
          name="nombre"
          type="text"
          className="form-control"
          value={nombre}
          placeholder="Nombre colaborador"
          onChange={handleOnChangeNombre}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="mb-1">Correo del colaborador</label>
        <input 
          type="email" 
          name="correo"
          className="form-control" 
          value={correo}
          placeholder="Correo colaborador" 
          onChange={handleOnChangeCorreo}
          />
      </div>
      <button type="submit" className="w-100 btn btn-primary">Agregar</button>
    </form>
  );
};

export default Colaborador;

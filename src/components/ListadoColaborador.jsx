import React from "react";

const ListadoColaborador = ({colaboradores}) => {
  return (
    <div className="col-10 col-md-5 col-lg-8 mx-auto">
      <div className="card">
        <div className="card-header text-secondary">
          <h2 className="card-title">Listado de colaboradores</h2>
        </div>
        <div className="card-body">
          <ul>
            {colaboradores.map((colaborador) => (
              <li
                key={colaborador.id.toString()}
                className="bg-light bg-gradient mb-2 rounded p-1 fs-4 border border-secondary"
              >
                🙍‍♂️ {colaborador.nombre.toLowerCase()} <br /> 📧{" "}
                {colaborador.correo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListadoColaborador;

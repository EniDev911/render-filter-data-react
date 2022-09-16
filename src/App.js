import './App.css';
import { BaseColaboradores } from './database/data';
import { useState } from 'react'
import Colaborador from './components/Colaborador';
import BuscarColaborador from './components/BuscarColaborador'
function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  // filtrado
  let resultados = [];
  if (!busqueda) {
    resultados = colaboradores;
  } else {
    resultados = colaboradores.filter((colaborador) =>
      colaborador.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase()))
  }

  return (
    <div className="App">
      <BuscarColaborador
        setBusqueda={setBusqueda} />
      <div className="container row mx-auto">
        <div className="col-10 col-md-6 col-lg-4 mx-auto">
          <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />
        </div>
        <div className="col-10 col-md-5 col-lg-8 mx-auto">
          <h2 className="text-uppercase bg-secondary p-2 m-0 text-light">Listado de colaboradores</h2>
          <ul className="border border-1 border-secondary p-2">
            {resultados.map(colaborador =>
              <li
                key={colaborador.id.toString()}
                className="bg-dark bg-gradient mb-2 rounded text-light p-1 fs-4">
                🙍‍♂️ {colaborador.nombre.toLowerCase()} <br /> 📧 {colaborador.correo}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;

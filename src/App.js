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
      <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />
      <h2 className="text-uppercase">Listado de colaboradores 👤</h2>
      <ul>
        {resultados.map(colaborador =>
          <li
            key={colaborador.id.toString()}
            className="bg-primary mb-2 rounded text-light p-1 fs-4">
            {colaborador.nombre.toLowerCase()} - {colaborador.correo}
          </li>
        )}
      </ul>
    </div>
  );
}
export default App;

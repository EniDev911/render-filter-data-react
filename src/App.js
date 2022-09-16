import './App.css';
import { BaseColaboradores } from './database/data';
import { useState } from 'react'
import Colaborador from './components/Colaborador';
import BuscarColaborador from './components/BuscarColaborador';
import ListadoColaborador from './components/ListadoColaborador';
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
        <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />
        <ListadoColaborador colaboradores={resultados} />
      </div>
    </div>
  );
}
export default App;

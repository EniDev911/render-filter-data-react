import React from 'react'


const BuscarColaborador = ({ setBusqueda }) => {

 // onChange busqueda
  const handleOnChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  }

  return (
    <nav className="navbar navbar-light mb-4 p-3 bg-dark text-light">
      <span className="navbard-brand">Buscar colaboradores</span>
      <input type="text" 
          placeholder="Buscar colaborador"
          onChange={handleOnChangeBusqueda}
      />
    </nav>
  )
}

export default BuscarColaborador
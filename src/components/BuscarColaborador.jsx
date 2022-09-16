import React from 'react'


const BuscarColaborador = ({ setBusqueda }) => {

 // onChange busqueda
  const handleOnChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  }

  return (
    <nav className="navbar navbar-light mb-4 p-3 bg-dark text-light">
      <img src="https://raw.githubusercontent.com/EniDev911/assets/main/png/logo/logo_con_bg.png" alt="logo" className="position-absolute end-50" width="60"/>
      <span className="navbar-brand text-light">
        Buscar colaboradores
      </span>
      <input type="text" 
          placeholder="Buscar colaborador"
          onChange={handleOnChangeBusqueda}
          list="datalistOptions"
      />
      <datalist id="datalistOptions">
        <option value="Colaborador 1" />
        <option value="Colaborador 2" />
        <option value="Colaborador 3" />
      </datalist>
    </nav>
  )
}

export default BuscarColaborador
import React, { useContext, useEffect, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const BarraBuscar = () => {
  const { buscar, setBuscar, mostrarBuscar, setMostrarBuscar } =
    useContext(ContextoTienda);
  const locacion = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (locacion.pathname.includes("productos")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [locacion]);

  return mostrarBuscar && visible ? (
    <div className="border border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Buscar"
        />
        <img className="w-4" src={assets.iconoLupa} alt="icono buscar" />
      </div>
      <img
        className="inline-3 w-3 cursor-pointer"
        onClick={() => setMostrarBuscar(false)}
        src={assets.iconoCruz}
        alt="icono cruz"
      />
    </div>
  ) : null;
};

export default BarraBuscar;

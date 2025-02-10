import { createContext, useState } from "react";
import { productos } from "../assets/assets";

export const ContextoTienda = createContext();

const ProveedorContextoTienda = (props) => {
  const currency = "$";
  const valor_envio = 10;
  const [buscar, setBuscar] = useState("");
  const [mostrarBuscar, setMostrarBuscar] = useState(false);

  const valor = {
    productos,
    currency,
    valor_envio,
    buscar,
    setBuscar,
    mostrarBuscar,
    setMostrarBuscar,
  };

  return (
    <ContextoTienda.Provider value={valor}>
      {props.children}
    </ContextoTienda.Provider>
  );
};

export default ProveedorContextoTienda;

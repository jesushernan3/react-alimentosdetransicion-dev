import { createContext, useEffect, useState } from "react";
import { productos } from "../assets/assets";

export const ContextoTienda = createContext();

const ProveedorContextoTienda = (props) => {
  const currency = "$";
  const valor_envio = 10;
  const [buscar, setBuscar] = useState("");
  const [mostrarBuscar, setMostrarBuscar] = useState(false);
  const [carritoItems, setCarritoItems] = useState({});

  const agregarACarrito = async (itemId, tamaño) => {
    let carritoData = structuredClone(carritoItems);

    if (carritoData[itemId]) {
      if (carritoData[itemId][tamaño]) {
        carritoData[itemId][tamaño] += 1;
      } else {
        carritoData[itemId][tamaño] = 1;
      }
    } else {
      carritoData[itemId] = {};
      carritoData[itemId][tamaño] = 1;
    }
    setCarritoItems(carritoData);
  };

  useEffect(() => {
    console.log(carritoItems);
  }, [carritoItems]);

  const valor = {
    productos,
    currency,
    valor_envio,
    buscar,
    setBuscar,
    mostrarBuscar,
    setMostrarBuscar,
    carritoItems,
    agregarACarrito,
  };

  return (
    <ContextoTienda.Provider value={valor}>
      {props.children}
    </ContextoTienda.Provider>
  );
};

export default ProveedorContextoTienda;

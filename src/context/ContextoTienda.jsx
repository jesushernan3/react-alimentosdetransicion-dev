import { createContext, useEffect, useState } from "react";
import { productos } from "../assets/assets";
import { toast } from "react-toastify";

export const ContextoTienda = createContext();

const ProveedorContextoTienda = (props) => {
  const currency = "$";
  const valor_envio = 10;
  const [buscar, setBuscar] = useState("");
  const [mostrarBuscar, setMostrarBuscar] = useState(false);
  const [carritoItems, setCarritoItems] = useState({});

  const agregarACarrito = async (itemId, tamaño) => {
    if (!tamaño) {
      toast.error("Seleccionar tamaño");
      return;
    }

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

  const getCarritoCuenta = () => {
    let totalCuenta = 0;
    for (const items in carritoItems) {
      for (const item in carritoItems[items]) {
        try {
          if (carritoItems[items][item] > 0) {
            totalCuenta += carritoItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCuenta;
  };
  // useEffect(() => {
  //   console.log(carritoItems);
  // }, [carritoItems]);

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
    getCarritoCuenta,
  };

  return (
    <ContextoTienda.Provider value={valor}>
      {props.children}
    </ContextoTienda.Provider>
  );
};

export default ProveedorContextoTienda;

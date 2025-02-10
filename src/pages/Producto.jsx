import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextoTienda } from "../context/ContextoTienda";
import { assets } from "../assets/assets";

const PaginaProducto = () => {
  const { nombreProducto } = useParams();
  const { productos } = useContext(ContextoTienda);
  const [productoData, setProductoData] = useState(false);
  const [imagen, setImagen] = useState("");

  const traerProductoData = async () => {
    productos.map((item) => {
      if (item.nombre === nombreProducto) {
        setProductoData(item);
        setImagen(item.imagen[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    traerProductoData();
  }, [nombreProducto, productos]);

  return productoData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Data del Producto */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Imagenes del Producto */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productoData.imagen.map((item, index) => {
              <img
                src={item}
                key={index}
                className="w-[24%] sm-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />;
            })}
            <p>aqui hirian las fotos</p>;
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default PaginaProducto;

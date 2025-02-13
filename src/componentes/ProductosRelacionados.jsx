// CORREGIR!!!
import React, { useContext, useEffect, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import ProductoItem from "./ProductoItem";
import Titulos from "./Titulos";

const ProductosRelacionados = ({ categoria, subCategoria }) => {
  const { productos } = useContext(ContextoTienda);
  const { relacionados, setRelacionados } = useState([]);

  useEffect(() => {
    if (productos.length > 0) {
      let productosCopia = productos.slice();

      productosCopia = productosCopia.filter(
        (item) => categoria === item.categoria
      );
      productosCopia = productosCopia.filter(
        (item) => subCategoria === item.subCategoria
      );
      // setRelacionados(productosCopia.slice(0, 5));
      console.log(productosCopia.slice(0, 5));
    }
  }, [productos]);

  return (
    <div>
      <div className="my-24">
        <div className="text-center text-3xl py-2">
          <Titulos text1={"PRODUCTOS"} text2={"RELACIONADOS"} />
        </div>
        <div className="grid grid-cos-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {/* {relacionados.map((item, index) => (
            <ProductoItem
              key={index}
              id={item.id}
              nombre={item.nombre}
              precio={item.precio}
              imagen={item.imagen}
            />
          ))} */}
          <p>aca van los relacionados</p>
        </div>
      </div>
    </div>
  );
};

export default ProductosRelacionados;

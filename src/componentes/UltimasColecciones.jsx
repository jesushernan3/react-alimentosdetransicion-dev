import React, { useContext, useEffect, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import Titulos from "./Titulos";
import ProductoItem from "./ProductoItem";

const UltimasColecciones = () => {
  const { productos } = useContext(ContextoTienda);
  const [UltimosProductos, setUltimosProductos] = useState([]);

  useEffect(() => {
    setUltimosProductos(productos.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titulos texto1={"ULTIMAS"} texto2={"COLECCIONES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          tempora, cum aspernatur itaque eligendi, quaerat necessitatibus
          architecto aperiam dolorum, atque dolorem omnis totam! Possimus
          obcaecati dolor tenetur exercitationem laborum odio?
        </p>
      </div>

      {/* Renderizar Productos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {UltimosProductos.map((item, index) => (
          <ProductoItem
            key={index}
            id={item.id}
            imagen={item.imagen}
            nombre={item.nombre}
            precio={item.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default UltimasColecciones;

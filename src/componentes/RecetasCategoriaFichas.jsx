import React, { useContext, useEffect, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import Titulos from "./Titulos";
import FichaCategoria from "./FichaCategoria";

const RecetasCategoriaFichas = () => {
  const { categoriasRecetas } = useContext(ContextoTienda);
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(categoriasRecetas.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titulos texto1={"TODA LAS"} texto2={"RECETAS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          tempora, cum aspernatur itaque eligendi, quaerat necessitatibus
          architecto aperiam dolorum, atque dolorem omnis totam! Possimus
          obcaecati dolor tenetur exercitationem laborum odio?
        </p>
      </div>

      {/* Renderizar Productos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Categorias.map((item, index) => (
          <FichaCategoria
            key={index}
            categoria={item.categoria}
            imagen={item.imagen}
            nombre={item.nombre}
          />
        ))}
      </div>
    </div>
  );
};

export default RecetasCategoriaFichas;

import React, { useContext, useEffect, useState } from "react";
import NuestraPolitica from "../componentes/NuestraPolitica";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import FichaReceta from "../componentes/FichaReceta";
import { ContextoTienda } from "../context/ContextoTienda";

const PaginaCategoriasRecetas = () => {
  const { categoria } = useParams();
  const { recetasMap } = useContext(ContextoTienda);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    if (recetasMap[categoria]) setRecetas(recetasMap[categoria]);
  }, [categoria]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex flex-col items-center justify-end w-full imagen-de-fondo h-[50vh]">
        <p className="block text-5xl text-gray-200">RECETAS</p>
      </div>

      {/* Seccion Categorias */}
      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <section className="text-center py-8 text-3xl">
          <h2 className="mt-10">[{categoria}]</h2>
          <img
            src={assets.iconoAdornoCuchillos}
            alt="icono"
            className="m-auto py-3"
          />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 py-15">
            En esta sitio web te bas a caer de <strong>culo</strong>, con toda
            la info que te vamos a dar, no vas a poder creer los años que te la
            comiste bien doblade al reverendo pedo por hacerle caso a unos
            palurdos imberbes degenerados que solo por el hecho de que te hablen
            por un pedazo de plástico luminoso vos te la crees toda. Salame!¿¿
          </p>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {recetas.map((item, index) => (
            <FichaReceta
              key={index}
              id={item.id}
              categoria={item.categoria}
              imagen={item.imagen}
              nombre={item.nombre}
            />
          ))}
        </section>
        <NuestraPolitica />
      </main>
    </div>
  );
};

export default PaginaCategoriasRecetas;

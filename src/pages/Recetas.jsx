import React from "react";
import RecetasCategoriasFichas from "../componentes/RecetasCategoriaFichas";
import NuestraPolitica from "../componentes/NuestraPolitica";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const PaginaRecetas = () => {
  const { categoria } = useParams();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex flex-col justify-center items-center w-full imagen-de-fondo h-[50vh]">
        <p className="text-5xl text-gray-200">RECETAS</p>
      </div>

      {/* Seccion Categorias */}
      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <RecetasCategoriasFichas />
        <NuestraPolitica />
      </main>
    </div>
  );
};

export default PaginaRecetas;

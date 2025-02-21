import React from "react";
import HeroGeneral from "../componentes/HeroGeneral";
import { useParams } from "react-router-dom";

const PaginaReceta = () => {
  const { nombre } = useParams();
  return (
    <div>
      {/* <HeroGeneral /> */}
      pagina recetas
    </div>
  );
};

export default PaginaReceta;

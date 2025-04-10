import React, { useContext, useEffect, useState } from "react";
import HeroGeneral from "../componentes/HeroGeneral";
import { useParams } from "react-router-dom";
import { ContextoTienda } from "../context/ContextoTienda";

const PaginaReceta = () => {
  const { nombre } = useParams();
  const { recetasMap } = useContext(ContextoTienda);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    if (recetasMap[nombre]) setRecetas(recetasMap[nombre]);
  }, []);
  return (
    <div>
      <HeroGeneral
        titulo={"Aca tiene que ir le nombre de la receta"}
        subtitulo={"aca va otra cosa"}
        categoria={"esto está al pedo"}
      />
      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <section>
          <p className="px-10 py-10">
            breve reseña de la receta: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis velit odit voluptatem. Dignissimos id
            corporis praesentium animi reiciendis doloribus, excepturi
            asperiores, exercitationem voluptate earum ab temporibus cupiditate
            dicta. Facilis, magnam.
          </p>
        </section>
        <section>
          <h3>Ingredientes</h3>
          <ul>
            <li>ingrediente1</li>
            <li>ingrediente2</li>
            <li>ingrediente3</li>
            <li>ingrediente4</li>
          </ul>
        </section>
        <section>
          <h3>Preparacion</h3>
          <ul>
            <li>Paso 1</li>
            <li>paso 2</li>
            <li>paso 3</li>
            <li>paso 4</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PaginaReceta;

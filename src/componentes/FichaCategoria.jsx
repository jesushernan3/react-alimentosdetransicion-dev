import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

const FichaCategoria = ({ id, imagen, nombre, categoria }) => {
  return (
    <Link to={`/recetas/${categoria}`} className="min-h-350px block">
      <div className="overflow-hidden min-h-42">
        <img
          className="hover:scale-110 transition easy-in-out"
          src={imagen}
          alt=""
        />
      </div>
      <p className="pt-2 pb-1 text-sm font-medium uppercase">{nombre}</p>
    </Link>
  );
};

export default FichaCategoria;

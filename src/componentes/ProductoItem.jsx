import React, { useCallback, useContext } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import { Link } from "react-router-dom";

const ProductoItem = ({ id, imagen, nombre, precio, descripcion }) => {
  const { currency } = useContext(ContextoTienda);

  return (
    <Link to={`/producto/${nombre}`} className="min-h-350px block">
      <div className="overflow-hidden min-h-42">
        <img
          className="hover:scale-110 transition easy-in-out"
          src={imagen[0]}
          alt=""
        />
      </div>
      <p className="pt-2 pb-1 text-sm font-medium uppercase">{nombre}</p>
      <p className="text-sm py-3">{descripcion}</p>
      <p>
        {currency} {precio}
      </p>
    </Link>
  );
};

export default ProductoItem;

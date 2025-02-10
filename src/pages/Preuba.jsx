import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextoTienda } from "../context/ContextoTienda";
import { assets } from "../assets/assets";

const PaginaPrueba = () => {
  const { productId } = useParams();
  const { productos } = useContext(ContextoTienda);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    productos.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, productos]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <img src={assets.imagenProdGalleta01} alt="" />
      {/* Data del Producto */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Imagenes del Producto */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <p>aqui hirian las fotos</p>;
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              <img
                src={item}
                key={index}
                className="w-[24%] sm-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default PaginaPrueba;

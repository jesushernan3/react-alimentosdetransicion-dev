import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextoTienda } from "../context/ContextoTienda";
import { assets } from "../assets/assets";
// import ProductosRelacionados from "../componentes/ProductosRelacionados";

const PaginaProducto = () => {
  const { nombreProducto } = useParams();
  const { productos, currency, agregarACarrito } = useContext(ContextoTienda);
  const [productoData, setProductoData] = useState(false);
  const [imagen, setImagen] = useState("");
  const [tamaño, setTamaño] = useState("");

  const traerProductoData = async () => {
    productos.map((item) => {
      if (item.nombre === nombreProducto) {
        setProductoData(item);
        setImagen(item.imagen[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    traerProductoData();
  }, [nombreProducto, productos]);

  return productoData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Data del Producto */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ----------- Lado Izquierdo - Imagenes del Producto ----------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* {productoData.imagen.map((item, index) => {
              <img
                onClick={() => setImagen(item)}
                src={item}
                key={index}
                className="w-[24%] sm-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />;
            })} */}
            <img src={imagen} alt="" />
          </div>
          <div className="w-full sm:w[80%]">
            <img src={imagen} alt="" />
          </div>
        </div>
        {/* ----------- Lado Derecho - Info Producto ------------ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productoData.nombre}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.iconoStar} className="w-3.5" />
            <img src={assets.iconoStar} className="w-3.5" />
            <img src={assets.iconoStar} className="w-3.5" />
            <img src={assets.iconoStar} className="w-3.5" />
            <img src={assets.iconoStarDesvanecida} className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productoData.precio}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productoData.descripcion}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Seleccionar Tamaño</p>
            <div className="flex gap-2">
              {productoData.tamaños.map((item, index) => (
                <button
                  onClick={() => setTamaño(item)}
                  className={`border py-2 px-4 bg-gray-200 ${
                    item === tamaño ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => agregarACarrito(productoData.id, tamaño)}
            className="bg-black text-white px-8 py-3 text-small active:bg-gray-700"
          >
            Agregar al Carrito
          </button>
          <hr className="text-gray-400 mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% productos organicos</p>
            <p>Contra reembolso está disponible en este producto</p>
            <p>Devolucion garantiza si no está satisfecho</p>
          </div>
        </div>
      </div>

      {/* ------ Descripcio y Reseñas ------- */}
      <div className="mt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Descripción</b>
          <p className="border px-5 py-3 text-sm">Reseñas (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            DESCRIPCION ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ullam saepe sunt possimus fuga, unde consectetur voluptatum,
            laudantium minus ipsum temporibus autem nobis delectus ratione ut?
            Ducimus distinctio vero quasi.
          </p>
          <p>
            RESEÑAS Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Inventore dolorum et sapiente facilis at aut, laboriosam numquam
            minus a. Tempore aspernatur amet, eum vitae quis voluptas asperiores
            adipisci sit sed.
          </p>
        </div>
      </div>

      {/* -------- Productos Relacionados(CORREGIR) ---------- */}
      {/* <ProductosRelacionados
        categoria={productoData.categoria}
        subCategoria={productoData.subCategoria}
      /> */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default PaginaProducto;

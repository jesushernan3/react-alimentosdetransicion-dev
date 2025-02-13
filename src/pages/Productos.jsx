import { useContext, useEffect, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";
import { assets, categorias } from "../assets/assets";
import HeroGeneral from "../componentes/HeroGeneral";
import Titulos from "../componentes/Titulos";
import ProductoItem from "../componentes/FichaProducto";

function PaginaProductos() {
  const { productos, buscar, mostrarBuscar } = useContext(ContextoTienda);
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [filtrarProductos, setFiltrarProductos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [subCategoria, setSubCategoria] = useState([]);
  const [OrdenTipo, setOrdenTipo] = useState("relevante");

  const alternarCategoria = (e) => {
    if (categoria.includes(e.target.value)) {
      setCategoria((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategoria((prev) => [...prev, e.target.value]);
    }
  };

  const alternarSubCategoria = (e) => {
    if (subCategoria.includes(e.target.value)) {
      setSubCategoria((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategoria((prev) => [...prev, e.target.value]);
    }
  };

  const aplicarFiltro = () => {
    let copiaProductos = productos.slice();
    if (mostrarBuscar && buscar) {
      copiaProductos = copiaProductos.filter((item) =>
        item.nombre.toLowerCase().includes(buscar.toLowerCase())
      );
    }
    if (categoria.length > 0) {
      copiaProductos = copiaProductos.filter((item) =>
        categoria.includes(item.categoria)
      );
    }
    if (subCategoria.length > 0) {
      copiaProductos = copiaProductos.filter((item) =>
        subCategoria.includes(item.subCategoria)
      );
    }

    setFiltrarProductos(copiaProductos);
  };

  const ordenarProducto = () => {
    let fpCopia = filtrarProductos.slice();

    switch (OrdenTipo) {
      case "ascendente":
        setFiltrarProductos(fpCopia.sort((a, b) => a.precio - b.precio));
        break;
      case "descendente":
        setFiltrarProductos(fpCopia.sort((a, b) => b.precio - a.precio));
        break;

      default:
        aplicarFiltro();
        break;
    }
  };

  useEffect(() => {
    setFiltrarProductos(productos);
  }, []);

  useEffect(() => {
    aplicarFiltro();
  }, [categoria, subCategoria, buscar, mostrarBuscar]);

  useEffect(() => {
    ordenarProducto();
  }, [OrdenTipo]);

  return (
    <div>
      <HeroGeneral
        info={{
          titulo: "PRODUCTOS",
          subtitulo: "encontra todo nuestro catalogo",
          categoria_info: "estas en...",
        }}
      />

      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
        <div className="text-center py-8 text-3xl">
          <Titulos texto1={"ULTIMAS"} texto2={"ELABORACIONES"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            En Alimentos de Transición, todos nuestros alimentos se elaboran
            frescos todos los días con recetas auténticas, ingredientes simples
            y un estilo de vida simple en mente.
          </p>
        </div>

        <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 my-8 border-t-2 border-gray-400">
          {/* Opciones de filtro */}
          <div className="min-w-60">
            <p
              onClick={() => setMostrarFiltro(!mostrarFiltro)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2"
            >
              FILTROS
              <img
                src={assets.iconoDireccionDerecha}
                className={`h-3 sm:hidden ${mostrarFiltro ? "rotate-90" : ""}`}
              />
            </p>

            {/* filtro de categoria */}
            <div
              className={`border border-gray-300 pl-5 py-6 mt-6 ${
                mostrarFiltro ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">CATEGORIAS</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Medallones"}
                    onChange={alternarCategoria}
                  />
                  Medallones
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Galletitas"}
                    onChange={alternarCategoria}
                  />
                  Galletitas
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Postres"}
                    onChange={alternarCategoria}
                  />
                  Postres
                </p>
              </div>
            </div>

            <div
              className={`border border-gray-300 pl-5 py-3 my-5 ${
                mostrarFiltro ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium">Sub CATEGORIAS</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-600">
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"Sin gluten"}
                    onChange={alternarSubCategoria}
                  />
                  Sin gluten
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"con gluten"}
                    onChange={alternarSubCategoria}
                  />
                  con gluten
                </p>
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3"
                    value={"sin sal"}
                    onChange={alternarSubCategoria}
                  />
                  sin sal
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Titulos texto1={"TODOS"} texto2={"PRODUCTOS"} />

              {/* Ordenamiento de prodctos */}
              <select
                onChange={(e) => setOrdenTipo(e.target.value)}
                className="border-2 border-gray-300 text-sm px-2"
              >
                <option value="relevante">Ordenar por: relevante</option>
                <option value="ascendente">Ordenar por: ascendente</option>
                <option value="descendente">Ordenar por: descendente</option>
              </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
              {filtrarProductos.map((item, index) => (
                <ProductoItem
                  key={index}
                  nombre={item.nombre}
                  id={item.id}
                  descripcion={item.descripcion}
                  precio={item.precio}
                  imagen={item.imagen}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaginaProductos;

import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ContextoTienda } from "../context/ContextoTienda";

function NavegadorPrincipal() {
  const [visible, setVisible] = useState(false);
  const { setMostrarBuscar, getCarritoCuenta } = useContext(ContextoTienda);

  const NavLinks = [
    {
      id: 1,
      name: "Productos",
      link: "/productos",
    },
    {
      id: 2,
      name: "Nosotros",
      link: "/nosotros",
    },
    {
      id: 3,
      name: "Contacto",
      link: "/contacto",
    },
    {
      id: 4,
      name: "Recetas",
      link: "/recetas",
    },
  ];

  return (
    <nav
      className="flex items-center justify-between p-5 font-medium"
      role="navegation"
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-16" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-base text-gray-700">
        {NavLinks.map(({ id, name, link }) => (
          <NavLink
            key={id}
            to={link}
            className="flex flex-col items-center gap-1"
          >
            <p>{name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}

        {/*<NavLink to="/productos" className="flex flex-col items-center gap-1">
          <p>Productos</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/nosotros" className="flex flex-col items-center gap-1">
          <p>Nosotros</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contacto" className="flex flex-col items-center gap-1">
          <p>Contacto</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/recetas" className="flex flex-col items-center gap-1">
          <p>Recetas</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
         <NavLink to="/prueba" className="flex flex-col items-center gap-1">
          <p>PRUEBA</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> */}
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setMostrarBuscar(true)}
          src={assets.iconoLupa}
          alt="lupa"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.iconoUsuario}
            alt="usuario"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Mi Perfil</p>
              <p className="cursor-pointer hover:text-black">Ordenes</p>
              <p className="cursor-pointer hover:text-black">Salir</p>
            </div>
          </div>
        </div>
        <Link to="/carrito" className="relative">
          <img
            src={assets.iconoBolsa}
            alt="bolsa de compra"
            className="w-5 min-w-5"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCarritoCuenta()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.iconoHamburguesa}
          alt="icono hamburguesa"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu para pantallas chicas  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-700">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.iconoDireccionDerecha}
              alt="icono volver"
              className="h-4 rotate-180"
            />
            <p>volver</p>
          </div>
          <NavLink className="py-2 pl-6 border" to={"/"}>
            Inicio
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/productos"}>
            Productos
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/nosotros"}>
            Nosotros
          </NavLink>
          <NavLink className="py-2 pl-6 border" to={"/contacto"}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavegadorPrincipal;

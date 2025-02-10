import CajaNewsletter from "../componentes/CajaNewsletter";
import HeroPrincipal from "../componentes/HeroPrincipal";
import NuestraPolitica from "../componentes/NuestraPolitica";
import UltimasColecciones from "../componentes/UltimasColecciones";
import { assets } from "../assets/assets";

function PaginaInicio() {
  return (
    <div>
      <HeroPrincipal />
      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <section className="text-center py-8 text-3xl">
          <h2 className="mt-10">Propuesta</h2>
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
            por un pedazo de plástico luminoso vos te la crees toda. Salame!
          </p>
          <div className="grid grid-cols-2">
            <div className="w-full flex flex-col items-center justify-center">
              <h3>Herencia</h3>
              <p className="text-base text-justify pt-5 text-gray-600">
                A través de generaciones hemos estado construyendo y desglosando
                una forma optima de transformar la alimentación. Nuestra
                propuesta consiste en continuar con esta tradición y adaptarnos
                a nuevas formas de intercambio. Ofrecerles la posiblidad de
                tener alimentos acordes a nuestro ritmo de vida. Armado con
                recetas familiares, nos proponemos llevar al alcance de todos
                nuestra visión de alimentos.
              </p>
            </div>
            <img src={assets.imagenFalafel} alt="falafel" className="w-full" />
            <img src={assets.imagenTabule} alt="falafel" className="w-full" />
            <div className="w-full flex flex-col items-center justify-center">
              <h3>Tradición</h3>
              <p className="text-base text-justify pt-5 text-gray-600">
                Preparamos nuestra comida tradicional y diariamente, para que
                sepa que está obteniendo la mejor comida de calidad que existe.
                Nuestro proceso de pedido es tan simple como nuestros
                ingredientes. Nos encanta cuidarlo y hemos diseñado un ambiente
                familiar en el que puede celebrar el evento de comer.
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <h3>Formas</h3>
              <p className="text-base text-justify pt-5 text-gray-600">
                Y como punto de cierre finalizamos esta propuesta con nuestro
                metodo para poner al alcance de la mayoria de personas posible,
                hacemos envios los lunes y viernes en C.A.B.A. y Gran Buenos
                Aires
              </p>
            </div>
            <img src={assets.imagenFalafel} alt="falafel" className="w-full" />
          </div>
        </section>
        <UltimasColecciones />
        <NuestraPolitica />
        <CajaNewsletter />
      </main>
    </div>
  );
}

export default PaginaInicio;

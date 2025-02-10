import { assets } from "../assets/assets";

function HeroPrincipal() {
  return (
    <div className="flex sm:flex-row imagen-de-fondo">
      {/* Hero lado izquierdo */}
      <div className="w-full sm:-w1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#fff]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-white"></p>
            <p className="font-medium text-sm md:text-base">
              ESTO ES EL HOME PAGE DE ADT
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Ultimas Novedades
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Bienvenido</p>
            <p className="w-8 md:w-11 h-[2px] bg-white"></p>
          </div>
        </div>
      </div>

      {/* Lado derecho del Hero */}
      <img
        src={assets.imagenCorazonGarbanzos}
        alt="Garbanzos"
        className="w-full sm:w1/2"
      />
      <div></div>
    </div>
  );
}

export default HeroPrincipal;

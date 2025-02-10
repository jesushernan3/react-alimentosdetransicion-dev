import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-[9vw] my-20 text-sm bg-gradient-to-bl">
        <div>
          <img src={assets.logo} className="mb-5 w-18 " alt="logo" />
          <p className="w-full md:w2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde saepe
            voluptatem accusantium laborum a corrupti ipsa, doloribus adipisci
            cupiditate iste amet, in rem voluptas totam natus explicabo maxime
            nobis enim.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPAÑIA</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Entregas</li>
            <li>Politica de Privacidad</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CONTACTO</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+54 11 1234-5678</li>
            <li>contacto@forever.com</li>
          </ul>
        </div>
      </div>

      <div className="text-gray-600 px-[9vw]">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 20225@ alimentosdetransicio.com todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
export default Footer;

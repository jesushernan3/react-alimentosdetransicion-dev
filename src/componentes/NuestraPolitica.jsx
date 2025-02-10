import React from "react";
import { assets } from "../assets/assets";

const NuestraPolitica = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.iconoExchange}
          alt="icono Intercambio"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          src={assets.iconoTilde}
          alt="Icono Check"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">7 days return policy</p>
        <p className="text-gray-400">We provide free 7 days return policy</p>
      </div>
      <div>
        <img
          src={assets.iconoUsuario}
          alt="icono usuario"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Best costumer support</p>
        <p className="text-gray-400">We provide 24/7 best costumer support</p>
      </div>
    </div>
  );
};

export default NuestraPolitica;

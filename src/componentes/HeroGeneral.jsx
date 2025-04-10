import React from "react";

const HeroGeneral = ({ titulo, subtitulo, categoria }) => {
  return (
    <div className="w-full imagen-de-fondo min-h-500px">
      <div className="flex flex-col sm:flex-rox ">
        <div className="w-full sm:-w1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#fff]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-white"></p>
              <p className="font-medium text-sm md:text-base">{categoria}</p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              {titulo}
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">{subtitulo}</p>
              <p className="w-8 md:w-11 h-[2px] bg-white"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGeneral;

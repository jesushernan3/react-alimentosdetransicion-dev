import React from "react";

const CajaNewsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center px-[9vw]">
      <p className="text-2xl font-medium to-gray-800">
        Suscribete ahora y recibe un 20% de descuento{" "}
      </p>
      <p className="to-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        necessitatibus exercitationem natus repudiandae vel possimus. Quis,
        harum accusamus. Cupiditate odio quos sunt quam, inventore pariatur
        natus consectetur nulla optio cum.
      </p>
      <form className="w-full sm:1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          onSubmit={onSubmitHandler}
          type="email"
          placeholder="Ingresa tu email"
          required
        />
        <button className="bg-black text-[#fff] text-xs px-10 py-4">
          Algo
        </button>
      </form>
    </div>
  );
};

export default CajaNewsletter;

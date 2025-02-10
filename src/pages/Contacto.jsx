import HeroGeneral from "../componentes/HeroGeneral";

function PaginaContacto() {
  return (
    <div>
      <HeroGeneral
        info={{
          titulo: "CONTACTO",
          subtitulo: "todo lo necesario para encontrarnos",
          categoria_info: "estas en...",
        }}
      />

      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
        <section class="text-center text-3xl py-20">
          <h1 class="title">nuestra info</h1>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 py-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            natus quisquam non officia ullam error facilis dolor earum?
            Repudiandae deserunt quam laudantium, facilis eius illo sed fuga
            quisquam rem iste.
          </p>
        </section>
      </main>
    </div>
  );
}

export default PaginaContacto;

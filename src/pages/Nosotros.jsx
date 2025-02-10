import HeroGeneral from "../componentes/HeroGeneral";

function PaginaNosotros() {
  return (
    <div>
      <HeroGeneral
        info={{
          titulo: "NOSOTROS",
          subtitulo: "esta es nuestra historia",
          categoria_info: "estas en...",
        }}
      />

      <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
        <section className="text-center text-3xl py-20">
          <h1 className="title">Nosotros somos la ostia</h1>
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 py-15">
            Nosotros Que fuimos tan sinceros Que desde que nos vimos Amándonos
            estamos Nosotros Que del amor hicimos Un sol maravilloso Un romance
            tan divino Nosotros Que nos queremos tanto Debemos separarnos No me
            preguntes más No es falta de cariño Te quiero con el alma Te juro
            que te adoro Y en nombre de este amor y por tu bien Te digo adiós
          </p>
        </section>
      </main>
    </div>
  );
}

export default PaginaNosotros;

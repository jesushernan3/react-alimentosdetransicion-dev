import logo from "./logo.color.100x100.png";
import logoFondoOscuro from "./logo.fondo.oscuro.100x82.png";
import medallonDeArroz from "./productos/medallones/medallones-arroz.jpg";
import medallonDeCalabaza from "./productos/medallones/medallones-calabaza.jpg";
import medallonDeGarbanzo from "./productos/medallones/medallones-garbanzos.jpg";
import medallonDeLenteja from "./productos/medallones/medallones-lenteja.jpg";
import medallonDeVerdura from "./productos/medallones/medallones-verdura.jpg";
import medallonDeVegetales from "./productos/medallones/medallones-vegetales.jpg";
import medallonDeAvena from "./productos/medallones/Medallones-garbanzo-avena.jpg";
import medallonDeBrocoli from "./productos/medallones/medallones-brocoli.jpg";
import bannerGeneral from "./banner-gral.jpg";
import bannerInicio from "./main-hero-home.jpg";
import iconoStar from "./icons/icon_star.png";
import iconoStarDesvanecida from "./icons/icon_star_desvanecida.png";
import iconoLupa from "./icons/icon_lupa.png";
import iconoBolsa from "./icons/icon_bolsa.png";
import iconoUsuario from "./icons/icon_usuario.png";
import iconoExchange from "./icons/icon_exchange.png";
import iconoTilde from "./icons/icon_tilde.png";
import iconoSoporte from "./icons/icon_soporte.png";
import iconoHamburguesa from "./icons/menu_hamburguesa.png";
import iconoDireccionDerecha from "./icons/icon_direccion-derecha.png";
import iconoAdornoCuchillos from "./icons/icon_adorno-cuchillos.webp";
import iconoCruz from "./icons/icon_cruz.png";
import imagenCorazonGarbanzos from "./inicio/home-c-3.webp";
import imagenPita from "./inicio/pita.webp";
import imagenTabule from "./inicio/tabule.webp";
import imagenFalafel from "./inicio/falafel.webp";
import imagenProdGalleta01 from "./productos/galletas/galleta_tipo_muffin/01.GalletaTipoMofin.jpg";
import imagenProdGalleta02 from "./productos/galletas/galleta_tipo_muffin/02.GalletaTipoMofin.jpg";
import imagenProdGalleta03 from "./productos/galletas/galleta_tipo_muffin/03.GalletaTipoMofin.jpg";
import imagenProdGalleta04 from "./productos/galletas/galleta_tipo_muffin/04.GalletaTipoMofin.jpg";

export const assets = {
  imagenFalafel,
  imagenTabule,
  imagenPita,
  iconoCruz,
  iconoAdornoCuchillos,
  imagenCorazonGarbanzos,
  iconoDireccionDerecha,
  iconoLupa,
  iconoBolsa,
  iconoUsuario,
  iconoExchange,
  iconoStar,
  iconoStarDesvanecida,
  iconoTilde,
  iconoSoporte,
  iconoHamburguesa,
  logo,
  logoFondoOscuro,
  medallonDeArroz,
  medallonDeCalabaza,
  medallonDeGarbanzo,
  medallonDeLenteja,
  medallonDeVerdura,
  medallonDeVegetales,
  medallonDeAvena,
  medallonDeBrocoli,
  bannerGeneral,
  bannerInicio,
  imagenProdGalleta01,
  imagenProdGalleta02,
  imagenProdGalleta03,
  imagenProdGalleta04,
};

export const categorias = [
  {
    id: 1,
    nombre: "Medallones de Arroz",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeArroz],
    categoria: "medallones",
  },
  {
    id: 2,
    nombre: "Medallones de Calabaza",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeCalabaza],
    categoria: "medallones",
  },
  {
    id: 3,
    nombre: "Medallones de Garbanzo",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeGarbanzo],
    categoria: "medallones",
  },
  {
    id: 4,
    nombre: "Medallones de Lenteja",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeLenteja],
    categoria: "medallones",
  },
];

export const productos = [
  {
    id: 1,
    nombre: "Producto-1",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeArroz],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Medallones",
    subCategoria: "Sin gluten",
    precio: 102,
  },
  {
    id: 2,
    nombre: "Producto-2",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeCalabaza],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Medallones",
    subCategoria: "con gluten",
    precio: 125,
  },
  {
    id: 3,
    nombre: "Producto-3",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeGarbanzo],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Medallones",
    subCategoria: "Sin gluten",
    precio: 778,
  },
  {
    id: 4,
    nombre: "Producto-4",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeLenteja],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Galletitas",
    subCategoria: "con gluten",
    precio: 888,
  },
  {
    id: 5,
    nombre: "Producto-5",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeVerdura],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Galletitas",
    subCategoria: "sin sal",
    precio: 999,
  },
  {
    id: 6,
    nombre: "Producto-6",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeVegetales],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Galletitas",
    subCategoria: "sin sal",
    precio: 147,
  },
  {
    id: 7,
    nombre: "Producto-7",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeAvena],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Postres",
    subCategoria: "sin sal",
    precio: 555,
  },
  {
    id: 8,
    nombre: "Producto-8",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [medallonDeBrocoli],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Postres",
    subCategoria: "sin sal",
    precio: 666,
  },
  {
    id: 9,
    nombre: "Cookie-01",
    descripcion:
      "aqui ira una descripcion de lo que es el producto en cuestion",
    imagen: [
      imagenProdGalleta01,
      imagenProdGalleta02,
      imagenProdGalleta03,
      imagenProdGalleta04,
    ],
    tamaños: ["chico", "mediano", "grande"],
    categoria: "Galletas",
    subCategoria: "con chocolate",
    precio: 1092,
  },
];

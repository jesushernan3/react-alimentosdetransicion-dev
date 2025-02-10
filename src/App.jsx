import PaginaInicio from "./pages/Inicio";
import PaginaNosotros from "./pages/Nosotros";
import PaginaContacto from "./pages/Contacto";
import PaginaProductos from "./pages/Productos";
// import PaginaProducto from "./pages/Producto";
import PaginaPrueba from "./pages/Preuba";
import { Routes, Route } from "react-router-dom";
import NavegadorPrincipal from "./componentes/NavegadorPrincipal";
import Footer from "./componentes/Footer";
import "./css/Main.css";
import BarraBuscar from "./componentes/BarraBuscar";
import PaginaProducto from "./pages/Producto";

function App() {
  return (
    <>
      <NavegadorPrincipal />
      <BarraBuscar />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/nosotros" element={<PaginaNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/productos" element={<PaginaProductos />} />
        <Route path="/producto/:nombreProducto" element={<PaginaProducto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

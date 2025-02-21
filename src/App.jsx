import PaginaInicio from "./pages/Inicio";
import PaginaNosotros from "./pages/Nosotros";
import PaginaContacto from "./pages/Contacto";
import PaginaProductos from "./pages/Productos";
import PaginaRecetas from "./pages/Recetas";
import PaginaCategoriasRecetas from "./pages/RecetasCategorias";
import PaginaReceta from "./pages/Receta";
import PaginaProducto from "./pages/Producto";
// import PaginaPrueba from "./pages/Preuba";
import { Routes, Route } from "react-router-dom";
import NavegadorPrincipal from "./componentes/NavegadorPrincipal";
import Footer from "./componentes/Footer";
import "./css/Main.css";
import BarraBuscar from "./componentes/BarraBuscar";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <NavegadorPrincipal />
      <BarraBuscar />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/nosotros" element={<PaginaNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/recetas" element={<PaginaRecetas />} />
        <Route
          path="/recetas/:categoria"
          element={<PaginaCategoriasRecetas />}
        />
        <Route path="/receta/:nombreReceta" element={<PaginaReceta />} />

        <Route path="/productos" element={<PaginaProductos />} />
        <Route path="/producto/:nombreProducto" element={<PaginaProducto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

// Importo los componentes y funciones necesarios de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importo los componentes que he creado
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Componente principal
function App() {
  // Estructura principal
  return (
    // Navegación gestionada por BrowserRouter
    <BrowserRouter>
      {/* Barra de navegación */}
      <NavBar />

      {/* Definición de rutas */}
      <Routes>
        {/* Página principal: lista de productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Mostrar productos de una categoría específica */}
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />

        {/* Detalles de un producto específico */}
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />

        {/* Página no encontrada para cualquier otra URL */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporto el componente principal
export default App;
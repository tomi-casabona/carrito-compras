import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";

function CarritoApp() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default CarritoApp;

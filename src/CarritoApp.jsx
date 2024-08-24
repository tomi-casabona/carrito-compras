import { Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";

function CarritoApp() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={}></Route>
        <Route path="/carrito" element={} ></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </>
  );
}

export default CarritoApp;

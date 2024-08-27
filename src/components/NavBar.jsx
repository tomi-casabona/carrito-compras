import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {
  const { listaCompras } = useContext(CarritoContext);

  const calculateItems = () => {
    return listaCompras.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black border border-secondary rounded border-2 mb-3">
      <div className="container-fluid ">
        <NavLink to="/" className="navbar-brand text-light">
          ShopApp
        </NavLink>
        <button
          className="navbar-toggler-light d-block d-md-none "
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active text-light">
                Compras
              </NavLink>
            </li>
          </ul>
          <NavLink to="/carrito">
            <Badge badgeContent={calculateItems()} color="error">
              <ShoppingCart sx={{ color: "white" }} color="light" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

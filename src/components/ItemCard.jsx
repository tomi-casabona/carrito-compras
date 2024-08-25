import { useState } from "react";

export const ItemCard = ({ imagen, titulo, descripcion, precio }) => {
  const [added, setAdded] = useState(false);
  return (
    <div className="">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo"> {titulo} </h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio"> {precio}</p>
      </div>
      {added ? (
        <button type="button" className="boton-quitar">
          quitar
        </button>
      ) : (
        <button type="button" className="boton-agregar">
          {" "}
          agregar
        </button>
      )}
    </div>
  );
};

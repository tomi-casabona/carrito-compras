import { useState } from "react";

export const ItemCard = ({ imagen, titulo, descripcion, precio }) => {
  const [added, setAdded] = useState(false);
  return (
    <div className="card mb-3 ">
      <div className="row ">
        <div className="col-3">
          <img
            src={imagen}
            alt={titulo}
            className="rounded p-4"
            width={"250px"}
            height={"250px"}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text fw-bolder fs-5">${precio}</p>
            {added ? (
              <button type="button" className="btn btn-danger">
                Quitar
              </button>
            ) : (
              <button type="button" className="btn btn-success">
                {" "}
                Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

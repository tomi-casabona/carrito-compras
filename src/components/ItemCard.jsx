import { useState } from "react";

export const ItemCard = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
}) => {
  const [added, setAdded] = useState(false);

  const OnClickAdd = () => {
    handleAgregar();
    setAdded(true);
  };
  const onClickRemove = () => {
    handleQuitar();
    setAdded(false);
  };

  return (
    <div className="card flex-fill d-flex flex-column m-1 p-1">
      <div className="text-center mx-auto mb-3">
        <img
          src={imagen}
          alt={titulo}
          className="card-img-top "
          style={{ maxWidth: "100%", maxHeight: "200px", height: "auto" }}
        />
      </div>
      <div className="card-body flex-grow-1">
        <h5>{titulo}</h5>
        <p>{descripcion}</p>
        <p className="text-end fw-bolder fs-3 ">${precio}</p>
      </div>
      <div className="card-footer mt-auto">
        {added ? (
          <button
            onClick={onClickRemove}
            type="button"
            className="btn btn-danger w-100"
          >
            Quitar
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={OnClickAdd}
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};

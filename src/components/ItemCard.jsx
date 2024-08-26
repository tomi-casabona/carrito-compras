import { useState } from "react";

export const ItemCard = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
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
    <div className="card mb-3 ">
      <div className="row g-0">
        <div className="col-3">
          <img src={imagen} alt={titulo} className="img-fluid p-4" />
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text fw-bolder fs-5">${precio}</p>
            {added ? (
              <button
                onClick={onClickRemove}
                type="button"
                className="btn btn-danger"
              >
                Quitar
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={OnClickAdd}
              >
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

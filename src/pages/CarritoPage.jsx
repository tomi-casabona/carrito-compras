import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    eliminarCompra,
    disminuirCantidad,
  } = useContext(CarritoContext);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>1</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  {" "}
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary"> Comprar </button>
      </div>
    </>
  );
};

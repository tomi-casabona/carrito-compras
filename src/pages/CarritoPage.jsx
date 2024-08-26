import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, eliminarCompra, disminuirCantidad } =
    useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const imprimir = () => {
    print();
  };

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
              <td>
                <button
                  className="rounded-5 btn px-3"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <button className="btn btn p-2"> {item.cantidad} </button>
                <button
                  className="rounded-5 btn"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  {" "}
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <th>
            {" "}
            <b>TOTAL:</b>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <b>{calcularTotal()}</b>
          </td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          disabled={listaCompras < 1}
          onClick={() => imprimir()}
        >
          {" "}
          Comprar{" "}
        </button>
      </div>
    </>
  );
};

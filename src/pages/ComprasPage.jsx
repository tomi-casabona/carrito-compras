import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import { ItemCard } from "../components/ItemCard";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 d-flex">
            <ItemCard
              precio={producto.price}
              titulo={producto.title}
              descripcion={producto.description}
              imagen={producto.image}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

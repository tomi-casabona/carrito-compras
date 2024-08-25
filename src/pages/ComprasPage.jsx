import { useEffect, useState } from "react";
import { ItemCard } from "../components/ItemCard";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      {productos.map((producto) => (
        <ItemCard
          key={producto.id}
          precio={producto.price}
          titulo={producto.title}
          descripcion={producto.description}
          imagen={producto.image}
        />
      ))}
    </>
  );
};

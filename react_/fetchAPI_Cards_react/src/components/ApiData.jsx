import { useState, useEffect } from "react";
import Card from "./Card.jsx";

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
    setData(products);
  };

  return (
    <div className="flex flex-wrap gap-5 py-5">
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ApiData;

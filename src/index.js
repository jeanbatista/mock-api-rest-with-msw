import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>MSW POC</h1>

      <h2>Products</h2>
      {products.map((product, index) => (
        <p key={index}>{product.name}</p>
      ))}
    </>
  );
}

if (process.env.NODE_ENV === "development") {
  console.log("env development");

  const { worker } = require("./mocks/worker");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);

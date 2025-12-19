import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <div>
    {products.map((product) => (
        <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    ))}
  </div>;
};

export default Cart;

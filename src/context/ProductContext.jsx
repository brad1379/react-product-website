import { createContext, useContext, useState, useEffect } from "react";

const database_file = "http://localhost:3001/products";

const ProductContext = createContext(null);

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used inside a <ProductProvider>");
  }
  return context;
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetches products on page load
  useEffect(() => {
    fetch(database_file)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products.");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Adds product
  function addProduct(product) {
    setError(null);
    return fetch(database_file, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not add product.");
        return response.json();
      })
      .then((data) => setProducts((prev) => [...prev, data]))
      .catch((error) => setError(error.message));
  }

  // Updates product
  function updateProduct(id, changes) {
    setError(null);
    return fetch(`${database_file}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changes),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not update product.");
        return response.json();
      })
      .then((data) =>
        setProducts((prev) => prev.map((p) => (p.id === id ? data : p)))
      )
      .catch((error) => setError(error.message));
  }

  // Deletes product
  function deleteProduct(id) {
    setError(null);
    return fetch(`${database_file}/${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) throw new Error("Could not delete product.");
        setProducts((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((error) => setError(error.message));
  }

  const value = {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

import { createContext, useEffect, useState } from "react";

const fetchData = async (products) => {
  let data = [];
  await fetch("http://localhost:3100/File")
    .then((response) => response.json())
    .then((File) => (data = File))
    .catch((error) => {
      console.log(error);
    });
};

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async (products) => {
    await fetch("http://localhost:3100/File")
      .then((response) => response.json())
      .then((File) => setProducts(File))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);

  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

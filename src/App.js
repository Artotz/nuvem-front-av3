import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const backURL = "https://7cs8rg-3000.csb.app";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://3.144.144.138:3000/produtos");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleFormSubmit = async (product) => {
    if (product.id) {
      await axios.put(`${backURL}/produtos/${product.id}`, product);
    } else {
      await axios.post(backURL + "/produtos", product);
    }
    fetchProducts();
    setSelectedProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete(`${backURL}/produtos/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm product={selectedProduct} onFormSubmit={handleFormSubmit} />
      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default App;

import React from "react";

const ProductList = ({ products, onSelectProduct, onDeleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome} - ${product.preco}
            <button onClick={() => onSelectProduct(product)}>Edit</button>
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

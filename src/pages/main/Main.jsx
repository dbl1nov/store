import React from "react";
import ProductList from "../../components/productList/ProductList";

export default function Main() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Все товары</h1>
      <ProductList />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg"></div>
            <div className="mt-2 bg-gray-200 h-4 rounded"></div>
            <div className="mt-2 bg-gray-200 h-4 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-sm cursor-pointer"
            onClick={() => openPopup(product)}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category.name}</p>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <ProductPopup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
}

function ProductPopup({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <p className="text-gray-600 mt-4">${product.price}</p>
        <p className="text-sm text-gray-500">{product.category.name}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductList;

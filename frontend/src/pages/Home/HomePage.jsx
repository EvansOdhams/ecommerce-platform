// src/pages/Home/HomePage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import { assets } from '../../assets/assets';

const HomePage = () => {
  const dispatch = useDispatch();

  const featuredProducts = [
    {
      id: 1,
      name: "Cool Sneakers",
      price: 79.99,
      description: "Comfortable and stylish sneakers",
      image: assets.cool_sneakers
    },
    {
      id: 2,
      name: "Awesome T-Shirt",
      price: 24.99,
      description: "100% cotton casual t-shirt",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Stylish Hat",
      price: 19.99,
      description: "Classic baseball cap",
      image: "/api/placeholder/200/200"
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="bg-blue-100 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store!</h1>
        <p className="text-xl mb-4">Find amazing products at great prices</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Shop Now
        </button>
      </div>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="border rounded-lg shadow-sm p-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
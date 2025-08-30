import React from 'react';

export default function Product({ name, price, img }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
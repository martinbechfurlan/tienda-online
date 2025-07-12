import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__brand">{product.brand}</p>
        <p className="product-card__desc">{product.shortDesc}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`} className="product-card__link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

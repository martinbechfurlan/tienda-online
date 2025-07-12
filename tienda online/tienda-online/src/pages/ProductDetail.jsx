import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail__image" />
      <div className="product-detail__info">
        <h2 className="product-detail__title">{product.name}</h2>
        <p className="product-detail__brand">{product.brand}</p>
        <p className="product-detail__desc">{product.longDesc}</p>
        <p className="product-detail__price">${product.price.toFixed(2)}</p>
        <button className="product-detail__button">Agregar al carrito</button>
        <Link to="/products" className="product-detail__back">← Volver</Link>
      </div>
    </div>
  );
}

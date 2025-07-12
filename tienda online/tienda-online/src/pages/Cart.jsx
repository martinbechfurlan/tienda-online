import React from 'react';
import { products } from '../data'; // Usamos el mismo mock
// Simulamos un carrito con dos productos del catálogo

const cartItems = [
  {
    productId: 1,
    quantity: 2
  },
  {
    productId: 2,
    quantity: 1
  }
];

export default function Cart() {
  // Enlazamos cada producto con su info del catálogo
  const items = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...product,
      quantity: item.quantity
    };
  });

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito de Compras</h2>

      {items.length === 0 ? (
        <p className="cart__empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart__list">
            {items.map(item => (
              <li key={item.id} className="cart__item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart__image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x100?text=Sin+imagen';
                  }}
                />
                <div className="cart__details">
                  <h4 className="cart__name">{item.name}</h4>
                  <p className="cart__quantity">Cantidad: {item.quantity}</p>
                  <p className="cart__price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart__total">Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

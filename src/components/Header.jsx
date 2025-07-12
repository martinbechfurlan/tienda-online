import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">🛒 MiTienda</Link>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><Link to="/">Inicio</Link></li>
          <li className="header__item"><Link to="/products">Productos</Link></li>
          <li className="header__item"><Link to="/cart">Carrito</Link></li>
          <li className="header__item"><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Bienvenido a MiTienda</h1>
      <p className="home__text">
        Explora nuestros productos y encuentra las mejores ofertas.
      </p>
      <Link to="/products" className="home__button">Ir a la tienda</Link>
      

    </div>
  );
}

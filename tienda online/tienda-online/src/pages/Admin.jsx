import React from 'react';
import { products } from '../data';

export default function Admin() {
  return (
    <div className="admin">
      <h2 className="admin__title">Panel de Administración</h2>
      <table className="admin__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>
                <button className="admin__button admin__button--edit">Editar</button>
                <button className="admin__button admin__button--delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState } from 'react';
import useMockFetch from '../hooks/useMockFetch';
import { products as mockProducts } from '../data';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const { data: products, loading } = useMockFetch(mockProducts);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products">
      <h2 className="products__title">Nuestros Productos</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o marca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="products__search"
      />

      {loading ? (
        <p className="products__loading">Cargando productos...</p>
      ) : (
        <div className="products__grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

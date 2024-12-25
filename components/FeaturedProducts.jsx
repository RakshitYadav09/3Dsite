import React from 'react';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}
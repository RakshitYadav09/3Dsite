import React from 'react';
import { ProductGrid } from '../ProductGrid';
import { Product } from '../../types/product';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">Related Products</h2>
      <ProductGrid products={products} />
    </section>
  );
}
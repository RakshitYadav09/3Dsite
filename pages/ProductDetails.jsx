import React from "react";
import { ProductGallery } from "../components/ProductDetails/ProductGallery";
import { ProductInfo } from "../components/ProductDetails/ProductInfo";
import { RelatedProducts } from "../components/ProductDetails/RelatedProducts";
import { featuredProducts } from "../data/products";

// In a real app, this would come from route params
const product = featuredProducts[0];
const relatedProducts = featuredProducts.slice(1);

export function ProductDetails() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductGallery images={[product.image]} title={product.title} />
          <ProductInfo {...product} />
        </div>
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}

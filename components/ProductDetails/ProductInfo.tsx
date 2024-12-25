import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';

type ProductInfoProps = Omit<Product, 'id' | 'image' | 'thumbnails'>;

export function ProductInfo({ 
  title, 
  price, 
  materials, 
  dimensions,
  customizable 
}: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-2xl font-bold text-gray-900">${price}</p>
      </div>

      <div className="space-y-4">
        {materials && (
          <div>
            <h2 className="text-sm font-medium text-gray-900">Materials</h2>
            <p className="mt-1 text-sm text-gray-500">{materials.join(', ')}</p>
          </div>
        )}

        {dimensions && (
          <div>
            <h2 className="text-sm font-medium text-gray-900">Dimensions</h2>
            <p className="mt-1 text-sm text-gray-500">
              {dimensions.width}×{dimensions.height}×{dimensions.depth} cm
            </p>
          </div>
        )}

        {customizable && (
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-700">
              This product can be customized to your specifications
            </p>
          </div>
        )}
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-white transition-transform hover:scale-105">
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </button>
    </div>
  );
}
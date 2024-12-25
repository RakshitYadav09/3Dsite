import React from 'react';
import { cn } from '../lib/utils';
import { ShoppingCart } from 'lucide-react';

export function ProductCard({ 
  title, 
  price, 
  image, 
  materials,
  dimensions,
  customizable,
  className 
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg", className)}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 space-y-2">
          {materials && (
            <p className="text-sm text-gray-600">
              Materials: {materials.join(', ')}
            </p>
          )}
          {dimensions && (
            <p className="text-sm text-gray-600">
              Size: {dimensions.width}×{dimensions.height}×{dimensions.depth} cm
            </p>
          )}
          {customizable && (
            <p className="text-sm text-gray-700">
              Customizable
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${price}</p>
          <button className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

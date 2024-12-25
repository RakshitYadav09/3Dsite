import React from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [mainImage, ...thumbnails] = images;

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={mainImage}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {thumbnails.map((image, index) => (
          <button
            key={index}
            className="aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={image}
              alt={`${title} view ${index + 2}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
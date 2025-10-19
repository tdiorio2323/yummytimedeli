import React from 'react';

const images = [
  '/assets/images/yummy-time-deli-logo.png',
  '/assets/images/yumy.png',
  '/banner.png',
];

export default function ImageGallery() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-primary mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

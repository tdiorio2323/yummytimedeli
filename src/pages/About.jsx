import React from 'react';
import ImageGallery from '../components/ImageGallery';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-primary mb-4">About Us</h1>
      <p className="text-text mb-4">
        Yummy Time Deli has been serving the Staten Island community for over 20 years. We are a family-owned and operated business, and we are proud to offer our customers the freshest and most delicious food.
      </p>
      <p className="text-text mb-4">
        Our menu features a wide variety of sandwiches, salads, and other deli favorites. We also have a full-service catering menu for all of your special events. We are committed to providing our customers with the best possible food and service. We hope to see you soon!
      </p>
      <ImageGallery />
    </div>
  );
}

import React from 'react';
import config from '../../config.json';

export default function SocialLinks() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold text-center mb-4 text-primary">Follow Us</h2>
      <div className="flex justify-center gap-4">
        <a href={config.social_media.facebook} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Facebook</a>
        <a href={config.social_media.instagram} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Instagram</a>
        <a href={config.social_media.twitter} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Twitter</a>
      </div>
    </div>
  );
}

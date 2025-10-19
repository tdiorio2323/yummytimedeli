import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <SocialLinks />
        <div className="text-center text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Yummy Time Deli. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

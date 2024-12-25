import React from 'react';
import { Box } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Box className="h-8 w-8 text-blue-400" />
              <span>3D.xyz</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming spaces with innovative 3D-printed designs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Products</a></li>
              <li><a href="#" className="hover:text-blue-400">Creators</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-400">Returns</a></li>
              <li><a href="#" className="hover:text-blue-400">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to get updates on new products and special offers.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 3D.xyz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
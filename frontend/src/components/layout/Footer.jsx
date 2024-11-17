import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About UZA</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-gray-900">Press Center</a></li>
              <li><a href="/impact" className="text-gray-600 hover:text-gray-900">Social Impact</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="/safety" className="text-gray-600 hover:text-gray-900">Safety Center</a></li>
              <li><a href="/community" className="text-gray-600 hover:text-gray-900">Community Guidelines</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="/sell" className="text-gray-600 hover:text-gray-900">Sell on UZA</a></li>
              <li><a href="/advertise" className="text-gray-600 hover:text-gray-900">Advertise</a></li>
              <li><a href="/affiliate" className="text-gray-600 hover:text-gray-900">Affiliate Program</a></li>
              <li><a href="/suppliers" className="text-gray-600 hover:text-gray-900">Suppliers</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 UZA. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="/accessibility" className="text-gray-600 hover:text-gray-900">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
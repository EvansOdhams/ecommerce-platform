import React, { useState } from 'react';
import { Search, User, HelpCircle, ChevronDown } from 'lucide-react';

const SearchBar = () => (
  <div className="relative flex-grow max-w-xl mx-4">
    <input
      type="text"
      placeholder="Search products..."
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="absolute right-3 top-1/2 -translate-y-1/2">
      <Search className="w-5 h-5 text-gray-500" />
    </button>
  </div>
);

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="w-5 h-5" />
        <span>Account</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <a href="/signin" className="block px-4 py-2 hover:bg-gray-100">Sign In</a>
          <a href="/account" className="block px-4 py-2 hover:bg-gray-100">My Account</a>
          <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</a>
          <a href="/saved" className="block px-4 py-2 hover:bg-gray-100">Saved Items</a>
        </div>
      )}
    </div>
  );
};

const HelpDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HelpCircle className="w-5 h-5" />
        <span>Help</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <a href="/help" className="block px-4 py-2 hover:bg-gray-100">Help Center</a>
          <a href="/deals" className="block px-4 py-2 hover:bg-gray-100">Hot Deals</a>
          <a href="/sell" className="block px-4 py-2 hover:bg-gray-100">Sell on UZA</a>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">UZA</a>
          
          {/* Search Bar */}
          <SearchBar />
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <AccountDropdown />
            <HelpDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
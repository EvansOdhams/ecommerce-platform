import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Our Store</h1>
            <div className="space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Home</button>
              <button className="text-gray-600 hover:text-gray-900">Products</button>
              <button className="text-gray-600 hover:text-gray-900">Cart (0)</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">© 2024 Our Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
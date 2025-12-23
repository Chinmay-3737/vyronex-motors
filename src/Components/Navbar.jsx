import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-transparent backdrop-blur-sm">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter">
        <span className="text-white">VYRONEX</span>
        <span className="text-brand-red">MOTORS</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 text-sm font-semibold tracking-wide">
        <a href="#" className="text-brand-red border-b border-brand-red pb-1">HOME</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">CAR SALES</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">CUSTOMIZATION STUDIO</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
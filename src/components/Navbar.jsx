import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black bg-opacity-70 backdrop-blur sticky top-0 z-50">
      <h1 className="text-xl font-bold text-purple-400">🚀 FOJ Token</h1>
      <div className="space-x-4">
        <a href="#hero" className="hover:text-purple-300">Home</a>
        <a href="#wallet" className="hover:text-purple-300">Wallet</a>
        <a href="#tokenomics" className="hover:text-purple-300">Tokenomics</a>
        <a href="#burn" className="hover:text-purple-300">Burn</a>
        <a href="#whitepaper" className="hover:text-purple-300">Whitepaper</a>
      </div>
    </nav>
  );
};

export default Navbar;

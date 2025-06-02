"use client";

import { useEffect, useState } from 'react';

import Image from "next/image";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main  className={`min-h-screen bg-white text-black font-sans transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
  
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold tracking-tight">Alias</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Wear Your Identity
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
          Custom-designed T-shirts made to express you.
        </p>
        <button className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 duration-300">
  Shop Now
</button>

      </section>
      {/* Featured Products */}
<section className="px-6 py-16 bg-gray-50">
  <h3 className="text-3xl font-bold text-center mb-12">Featured Tees</h3>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { name: 'Identity Tee', price: '$29', image: '/IIT-Bombay-400076-navy-Blue-Base-Back-Design.jpg'},
      { name: 'Statement Tee', price: '$32', image: '/IIT-Bombay-400076-navy-Blue-Base-Back-Design.jpg' },
      { name: 'Minimal Tee', price: '$27', image:  '/IIT-Bombay-400076-navy-Blue-Base-Back-Design.jpg' },
    ].map((product, idx) => (
      <div key={idx} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-gray-500">{product.price}</p>
      </div>
    ))}
  </div>
</section>
{/* About Alias */}
<section className="px-6 py-20 bg-white text-black">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div>
      <h3 className="text-3xl font-bold mb-4">About Alias</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        Alias isn’t just another T-shirt brand — it's a canvas for self-expression.
        We create bold, custom designs that help you wear your identity with pride.
        Every piece is made with meaning, because your style deserves more than basic.
      </p>
    </div>

    {/* Optional Image */}
    <div>
      <img
        src="https://source.unsplash.com/600x600/?tshirt,person"
        alt="About Alias"
        className="w-full h-auto rounded-xl shadow-sm"
      />
    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-gray-100 text-black py-10 px-6 mt-20 border-t border-gray-200">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

    {/* Brand Name */}
    <div className="text-xl font-bold">Alias</div>

    {/* Nav Links */}
    <div className="space-x-6 text-sm font-medium">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">Shop</a>
      <a href="#" className="hover:underline">About</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>

    {/* Copyright */}
    <div className="text-sm text-gray-500">
      © {new Date().getFullYear()} Alias. All rights reserved.
    </div>
  </div>
</footer>

    </main>
  );
}


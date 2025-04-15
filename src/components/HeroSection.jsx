import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Discover Quality Products for Your Lifestyle",
    description: "Shop the latest trends and essentials with our curated collection of premium products.",
    image: "https://i.pinimg.com/1200x/99/64/a2/9964a202c67115b1f40714082848c312.jpg",
    alt: "Lifestyle Products"
  },
  {
    title: "Elevate Your Everyday Experience",
    description: "Find unique items designed to enhance your daily routine with style and comfort.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop",
    alt: "Daily Essentials"
  },
  {
    title: "Curated Just for You",
    description: "Explore our handpicked selection of products tailored to your needs and preferences.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop",
    alt: "Curated Collection"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 sm:py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-accent animate-slide-in-left">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-gray-600 animate-slide-in-left animation-delay-200">
              {slides[currentSlide].description}
            </p>
            <div className="flex space-x-4 animate-slide-in-left animation-delay-400">
              <Link
                to="/products"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/categories"
                className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.5s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 0.7s ease-in forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </section>
  );
}
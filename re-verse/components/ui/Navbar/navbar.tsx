"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import logo from '@/public/Image/Reverse Logo.jpeg';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed top-0 z-50  shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
          <Image src={logo} alt="Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-white tracking-wide">Re<span className='bg-clip-text text-transparent font-bold bg-gradient-to-r from-purple-600 to-blue-500'>Verse</span></span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
            Home
          </Link>
          <Link href="/trivia" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
            Trivia
          </Link>
          <Link href="/articles" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
            Articles
          </Link>
          <Link href="/contact" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
            Contact Us
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button
            onClick={() => router.push('/login')}
            className="text-white bg-yellow-500 px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-200 font-semibold"
          >
            Login
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
        >
          {isMobileMenuOpen ? (
            <span className='text-2xl'>&times;</span>
          ) : (
            <span className='text-2xl'>&#9776;</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
              Home
            </Link>
            <Link href="/trivia" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
              Trivia
            </Link>
            <Link href="/articles" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
              Articles
            </Link>
            <Link href="/contact" className="text-white font-medium hover:text-yellow-300 transition-colors duration-200">
              Contact Us
            </Link>
            <button
              onClick={() => router.push('/login')}
              className="text-white bg-yellow-500 px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-200 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

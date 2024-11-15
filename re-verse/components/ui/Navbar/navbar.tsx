"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logo from '@/public/Image/Reverse Logo.jpeg';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
          <Image src={logo} alt="Logo" width={40} height={40} className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-100 tracking-wide">ReVerse</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-100 font-medium hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link href="/trivia" className="text-gray-100 font-medium hover:text-indigo-400 transition-colors">
            Trivia
          </Link>
          <Link href="/articles" className="text-gray-100 font-medium hover:text-indigo-400 transition-colors">
            Articles
          </Link>
          <Link href="/contact" className="text-gray-100 font-medium hover:text-indigo-400 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button
            onClick={() => router.push('/login')}
            className="text-white bg-slate-700 px-5 py-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-200 font-semibold"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-100 focus:outline-none"
            onClick={() => {/* Functionality to open a mobile menu if needed */}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

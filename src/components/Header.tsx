"use client";
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center items-center px-4 sm:px-8 md:px-16 py-4 w-full text-lg font-bold bg-white shadow-sm sticky top-0 z-50">
      <div className="flex gap-5 justify-between w-full max-w-[1240px]">
        <div className="flex gap-5 justify-between items-center">
          <a href="/" className="text-3xl font-black text-blue-600">
            카올 <span className="font-light">Car All</span>
          </a>
          <nav className="hidden md:flex gap-10 justify-between my-auto">
            <a href="/new-car" className="hover:text-blue-600">신차</a>
            <a href="/used-car" className="hover:text-blue-600">중고차</a>
            <a href="/quote" className="hover:text-blue-600">견적요청</a>
          </nav>
        </div>

        <div className="hidden md:flex gap-5 justify-between items-center">
          <a href="/login" className="my-auto hover:text-blue-600">로그인</a>
          <a href="/signup" className="my-auto hover:text-blue-600">회원가입</a>
          <a href="/contact" className="justify-center px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <span className="flex gap-2.5 items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="shrink-0 w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              고객센터
            </span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-800 focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="/new-car" className="hover:text-blue-600">신차</a>
            <a href="/used-car" className="hover:text-blue-600">중고차</a>
            <a href="/quote" className="hover:text-blue-600">견적요청</a>
            <a href="/login" className="hover:text-blue-600">로그인</a>
            <a href="/signup" className="hover:text-blue-600">회원가입</a>
            <a href="/contact" className="w-11/12 text-center justify-center px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              고객센터
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

"use client";
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center w-full text-white min-h-[60vh] px-4 sm:px-8 md:px-16 py-12">
      <img
        src="/00000.jpg"
        alt="Modern sports car"
        className="absolute inset-0 object-cover w-full h-full brightness-50"
      />
      <div className="relative flex flex-col w-full max-w-2xl">
        <h1 className="text-3xl font-bold leading-tight drop-shadow-lg sm:text-4xl lg:text-5xl">
          가장 빠른 신차견적, <br />
          카올과 함께하세요
        </h1>
        <p className="mt-4 text-lg leading-8 sm:text-xl drop-shadow-md">
          원하는 차량을 최고의 조건으로 구매할 수 있도록 카올이 도와드립니다.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 p-2 mt-8 bg-white rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="원하시는 차종을 입력하세요"
            className="flex-grow px-4 py-3 text-base sm:text-lg text-zinc-800 bg-transparent border-none focus:ring-0"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            견적요청
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;

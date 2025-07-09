import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import CarBrandsSection from '@/components/CarBrandsSection';
import UserStatsSection from '@/components/UserStatsSection';
import NewsSection from '@/components/NewsSection';
import UserReviewsSection from '@/components/UserReviewsSection';
import AppBanner from '@/components/AppBanner';
import Footer from '@/components/Footer';

const CardongLandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header />
      <main className="flex flex-col w-full">
        <HeroSection />
        <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto py-16 sm:py-24 gap-16 px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <ServicesGrid />
          <CarBrandsSection />
          <UserStatsSection />
          <NewsSection />
        </div>
        <UserReviewsSection />
      </main>
      <AppBanner />
      <Footer />
    </div>
  );
};

export default CardongLandingPage;

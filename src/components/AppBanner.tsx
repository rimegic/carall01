import React from 'react';
import Image from 'next/image';

const AppBanner: React.FC = () => {
  return (
    <div className="bg-blue-600 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">카올 앱으로 더 편리하게!</h3>
          <p className="mt-2 opacity-80">앱 전용 혜택과 맞춤 알림을 받아보세요.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Image src="/images/icons/app-store-badge.svg" alt="App Store에서 다운로드" width={150} height={50} />
          </a>
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Image src="/images/icons/google-play-badge.svg" alt="Google Play에서 다운로드" width={150} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBanner; 
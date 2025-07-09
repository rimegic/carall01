"use client";

import React, { useState } from 'react';
import CarBrandCategory from '@/components/CarBrandCategory';

type Tab = 'domestic' | 'foreign';

const CarBrandsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('domestic');

  const domesticBrands = [
    { name: "현대", image: "/images/logos/hyundai.png" },
    { name: "제네시스", image: "/images/logos/genesis.png" },
    { name: "기아", image: "/images/logos/kia.png" },
    { name: "쉐보레", image: "/images/logos/chevrolet.png" },
    { name: "KG모빌리티", image: "/images/logos/kg-mobility.png" },
  ];

  const foreignBrands = [
    { name: "벤츠", image: "/images/logos/mercedes.png" },
    { name: "BMW", image: "/images/logos/bmw.png" },
    { name: "아우디", image: "/images/logos/audi.png" },
    { name: "폭스바겐", image: "/images/logos/volkswagen.png" },
    { name: "볼보", image: "/images/logos/volvo.png" },
  ];

  const tabButtonStyle = "px-8 py-3 text-lg font-bold rounded-full transition-colors";
  const activeTabStyle = "bg-blue-600 text-white";
  const inactiveTabStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <section className="flex flex-col items-center self-center px-5 w-full max-w-[1240px]">
      <header className="pb-7 text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal text-center text-blue-600">
        <h2>BRANDS</h2>
      </header>
      
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('domestic')}
          className={`px-6 py-2 sm:px-8 sm:py-3 text-lg font-bold rounded-full transition-colors ${activeTab === 'domestic' ? activeTabStyle : inactiveTabStyle}`}
        >
          국산차
        </button>
        <button 
          onClick={() => setActiveTab('foreign')}
          className={`px-6 py-2 sm:px-8 sm:py-3 text-lg font-bold rounded-full transition-colors ${activeTab === 'foreign' ? activeTabStyle : inactiveTabStyle}`}
        >
          수입차
        </button>
      </div>

      <div className="mt-5 w-full max-md:max-w-full">
        {activeTab === 'domestic' && <CarBrandCategory title="국산차" brands={domesticBrands} />}
        {activeTab === 'foreign' && <CarBrandCategory title="수입차" brands={foreignBrands} />}
      </div>
    </section>
  );
};

export default CarBrandsSection;

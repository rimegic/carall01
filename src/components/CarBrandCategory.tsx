import React from 'react';

interface BrandItem {
  name: string;
  image: string;
}

interface CarBrandCategoryProps {
  title: string;
  brands: BrandItem[];
}

const CarBrandCategory: React.FC<CarBrandCategoryProps> = ({ title, brands }) => {
  return (
    <div className="pt-2.5 w-full">
      <h3 className="text-xl font-bold text-zinc-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brands && brands.map((brand) => (
          <a 
            href={`/brands/${brand.name.toLowerCase()}`} 
            key={brand.name} 
            className="flex flex-col items-center justify-center p-4 h-32 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex-grow flex items-center justify-center">
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="w-24 max-h-12 object-contain"
              />
            </div>
            <span className="mt-2 text-base text-zinc-600">{brand.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CarBrandCategory;

import React from 'react';
import { brands } from '@/data/admin/brands';
import BrandsClient from '@/components/admin/BrandsClient';

const BrandsPage = () => {
  return (
    <div>
      <BrandsClient initialBrands={brands} />
    </div>
  );
};

export default BrandsPage; 
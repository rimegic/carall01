"use client";

import React, { useState } from 'react';
import { Brand } from '@/data/admin/brands';
import Modal from '@/components/admin/Modal';
import Image from 'next/image';

interface BrandsClientProps {
  initialBrands: Brand[];
}

const BrandsClient: React.FC<BrandsClientProps> = ({ initialBrands }) => {
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  
  const [formState, setFormState] = useState({ id: '', name: '', logoUrl: '' });

  const handleOpenModal = (mode: 'add' | 'edit', brand?: Brand) => {
    setModalMode(mode);
    if (mode === 'edit' && brand) {
      setSelectedBrand(brand);
      setFormState(brand);
    } else {
      setSelectedBrand(null);
      setFormState({ id: '', name: '', logoUrl: '' });
    }
    setIsModalOpen(true);
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'add') {
      setBrands([...brands, { ...formState, id: `b${Date.now()}` }]);
    } else if (selectedBrand) {
      setBrands(brands.map(b => b.id === selectedBrand.id ? formState : b));
    }
    setIsModalOpen(false);
  };

  const handleDelete = (brandId: string) => {
    setBrands(brands.filter(b => b.id !== brandId));
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center pb-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800">브랜드 관리</h1>
            <button onClick={() => handleOpenModal('add')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                신규 브랜드 추가
            </button>
        </header>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div key={brand.id} className="relative group border rounded-lg p-4 flex flex-col items-center justify-center aspect-square">
                <Image src={brand.logoUrl} alt={brand.name} width={80} height={80} objectFit="contain" />
                <p className="mt-2 text-sm font-medium">{brand.name}</p>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleOpenModal('edit', brand)} className="text-white text-xs bg-gray-700 px-2 py-1 rounded">수정</button>
                    <button onClick={() => handleDelete(brand.id)} className="text-white text-xs bg-red-600 px-2 py-1 rounded">삭제</button>
                </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalMode === 'add' ? '신규 브랜드 추가' : '브랜드 정보 수정'}>
        <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">브랜드명</label>
                <input type="text" name="name" id="name" value={formState.name} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div>
                <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">로고 이미지 URL</label>
                <input type="text" name="logoUrl" id="logoUrl" value={formState.logoUrl} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">취소</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">저장</button>
            </div>
        </form>
      </Modal>
    </>
  );
};

export default BrandsClient; 
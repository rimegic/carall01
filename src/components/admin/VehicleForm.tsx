"use client";

import React, { useState, useEffect } from 'react';
import { Vehicle } from '@/data/admin/vehicles';

interface VehicleFormProps {
  initialData?: Vehicle | null;
  onSubmit: (data: Omit<Vehicle, 'id' | 'createdAt' | 'imageUrl'> & { id?: string }) => void;
  onClose: () => void;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ initialData, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    modelName: '',
    vehicleNumber: '',
    manufacturer: '',
    fuel: '가솔린' as Vehicle['fuel'],
    mileage: 0,
    year: new Date().getFullYear(),
    price: 0,
    status: '판매중' as Vehicle['status'],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        modelName: initialData.modelName,
        vehicleNumber: initialData.vehicleNumber,
        manufacturer: initialData.manufacturer,
        fuel: initialData.fuel,
        mileage: initialData.mileage,
        year: initialData.year,
        price: initialData.price,
        status: initialData.status,
      });
    } else {
      // Reset form for new entry
      setFormData({
        modelName: '',
        vehicleNumber: '',
        manufacturer: '',
        fuel: '가솔린',
        mileage: 0,
        year: new Date().getFullYear(),
        price: 0,
        status: '판매중',
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isNumber = ['mileage', 'year', 'price'].includes(name);
    setFormData(prev => ({ ...prev, [name]: isNumber ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData) {
      onSubmit({ ...formData, id: initialData.id });
    } else {
      onSubmit(formData);
    }
  };

  const fuelOptions: Vehicle['fuel'][] = ['가솔린', '디젤', '전기', '하이브리드', 'LPG'];
  const statusOptions: Vehicle['status'][] = ['판매중', '예약중', '판매완료'];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">제조사</label>
          <input type="text" name="manufacturer" id="manufacturer" value={formData.manufacturer} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="modelName" className="block text-sm font-medium text-gray-700">모델명</label>
          <input type="text" name="modelName" id="modelName" value={formData.modelName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">차량번호</label>
          <input type="text" name="vehicleNumber" id="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">연식</label>
          <input type="number" name="year" id="year" value={formData.year} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">주행거리 (km)</label>
          <input type="number" name="mileage" id="mileage" value={formData.mileage} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">가격 (만원)</label>
          <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required />
        </div>
        <div>
          <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">연료</label>
          <select name="fuel" id="fuel" value={formData.fuel} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            {fuelOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">상태</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            {statusOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 pt-4">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          취소
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          {initialData ? '수정' : '등록'}
        </button>
      </div>
    </form>
  );
};

export default VehicleForm; 
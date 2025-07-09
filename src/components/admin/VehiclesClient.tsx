"use client";

import React, { useState, useMemo } from 'react';
import { Vehicle, VehicleStatus } from '@/data/admin/vehicles';
import Image from 'next/image';
import Modal from '@/components/admin/Modal';
import VehicleForm from '@/components/admin/VehicleForm';

interface VehiclesClientProps {
  initialVehicles: Vehicle[];
}

const PAGE_SIZE = 5;

const VehiclesClient: React.FC<VehiclesClientProps> = ({ initialVehicles }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ manufacturer: 'all', fuel: 'all', status: 'all' });
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  // Delete confirmation modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleAddNew = () => {
    setModalMode('add');
    setSelectedVehicle(null);
    setIsModalOpen(true);
  };

  const handleEdit = (vehicle: Vehicle) => {
    setModalMode('edit');
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };
  
  const handleDelete = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedVehicle) {
      setVehicles(prev => prev.filter(v => v.id !== selectedVehicle.id));
      setIsDeleteModalOpen(false);
      setSelectedVehicle(null);
    }
  };

  const handleFormSubmit = (data: Omit<Vehicle, 'id' | 'createdAt' | 'imageUrl'> & { id?: string }) => {
    if (modalMode === 'add') {
      const newVehicle: Vehicle = {
        ...data,
        id: `v${Date.now()}`,
        createdAt: new Date().toISOString().split('T')[0],
        imageUrl: 'https://via.placeholder.com/150',
      };
      setVehicles(prev => [newVehicle, ...prev]);
    } else if (modalMode === 'edit' && selectedVehicle) {
      setVehicles(prev => prev.map(v => v.id === selectedVehicle.id ? { ...v, ...data } : v));
    }
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  const filteredVehicles = useMemo(() => {
    let filtered = vehicles;

    if (filters.manufacturer !== 'all') {
      filtered = filtered.filter(v => v.manufacturer === filters.manufacturer);
    }
    if (filters.fuel !== 'all') {
      filtered = filtered.filter(v => v.fuel === filters.fuel);
    }
    if (filters.status !== 'all') {
      filtered = filtered.filter(v => v.status === filters.status);
    }

    if (searchTerm) {
      filtered = filtered.filter(vehicle =>
        vehicle.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, filters, vehicles]);

  const totalPages = Math.ceil(filteredVehicles.length / PAGE_SIZE);
  const paginatedVehicles = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredVehicles.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredVehicles]);
  
  const manufacturers = ['all', ...Array.from(new Set(initialVehicles.map(v => v.manufacturer)))];
  const fuels = ['all', ...Array.from(new Set(initialVehicles.map(v => v.fuel)))];
  const statuses: (VehicleStatus | 'all')[] = ['all', '판매중', '예약중', '판매완료'];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };
  
  const getStatusChip = (status: Vehicle['status']) => {
    switch (status) {
      case '판매중': return 'bg-green-100 text-green-800';
      case '예약중': return 'bg-yellow-100 text-yellow-800';
      case '판매완료': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <header className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">차량 관리</h1>
        <button onClick={handleAddNew} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          신규 차량 등록
        </button>
      </header>

      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="모델명 또는 차량번호 검색..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-auto flex-grow sm:flex-grow-0 max-w-sm px-4 py-2 border rounded-md"
        />
        <select name="manufacturer" onChange={handleFilterChange} className="px-4 py-2 border rounded-md bg-white">
          {manufacturers.map(m => <option key={m} value={m}>{m === 'all' ? '모든 제조사' : m}</option>)}
        </select>
        <select name="fuel" onChange={handleFilterChange} className="px-4 py-2 border rounded-md bg-white">
          {fuels.map(f => <option key={f} value={f}>{f === 'all' ? '모든 연료' : f}</option>)}
        </select>
        <select name="status" onChange={handleFilterChange} className="px-4 py-2 border rounded-md bg-white">
          {statuses.map(s => <option key={s} value={s}>{s === 'all' ? '모든 상태' : s}</option>)}
        </select>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">차량 정보</th>
              <th scope="col" className="px-6 py-3">가격</th>
              <th scope="col" className="px-6 py-3">상태</th>
              <th scope="col" className="px-6 py-3">등록일</th>
              <th scope="col" className="px-6 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {paginatedVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <Image src={vehicle.imageUrl} alt={vehicle.modelName} width={80} height={50} className="rounded-md object-cover" />
                    <div>
                      <div>{vehicle.modelName}</div>
                      <div className="text-xs text-gray-500">{vehicle.vehicleNumber}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{vehicle.price.toLocaleString()}만원</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChip(vehicle.status)}`}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="px-6 py-4">{vehicle.createdAt}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button onClick={() => handleEdit(vehicle)} className="font-medium text-blue-600 hover:underline">수정</button>
                  <button onClick={() => handleDelete(vehicle)} className="font-medium text-red-600 hover:underline">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-700">
          총 {filteredVehicles.length}개 중 {((currentPage - 1) * PAGE_SIZE) + 1}-{Math.min(currentPage * PAGE_SIZE, filteredVehicles.length)}
        </span>
        <div className="inline-flex -space-x-px">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50">
            이전
          </button>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50">
            다음
          </button>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalMode === 'add' ? '신규 차량 등록' : '차량 정보 수정'}>
        <VehicleForm 
          initialData={selectedVehicle} 
          onSubmit={handleFormSubmit} 
          onClose={() => setIsModalOpen(false)} 
        />
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="차량 삭제 확인">
        <div>
          <p>정말로 '{selectedVehicle?.modelName}' 차량 정보를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
          <div className="mt-6 flex justify-end gap-4">
            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">취소</button>
            <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">삭제</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VehiclesClient; 
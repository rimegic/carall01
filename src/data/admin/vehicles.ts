export type VehicleStatus = '판매중' | '예약중' | '판매완료';

export interface Vehicle {
  id: string;
  modelName: string;
  vehicleNumber: string;
  manufacturer: string;
  fuel: '가솔린' | '디젤' | '전기' | '하이브리드' | 'LPG';
  mileage: number;
  year: number;
  price: number;
  imageUrl: string;
  status: VehicleStatus;
  createdAt: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 'v001',
    modelName: '제네시스 G80',
    vehicleNumber: '12가 3456',
    manufacturer: '제네시스',
    fuel: '가솔린',
    mileage: 25000,
    year: 2022,
    price: 5500,
    imageUrl: 'https://via.placeholder.com/150',
    status: '판매중',
    createdAt: '2023-10-26',
  },
  {
    id: 'v002',
    modelName: 'BMW 5시리즈',
    vehicleNumber: '34나 7890',
    manufacturer: 'BMW',
    fuel: '디젤',
    mileage: 42000,
    year: 2021,
    price: 6200,
    imageUrl: 'https://via.placeholder.com/150',
    status: '예약중',
    createdAt: '2023-10-25',
  },
  {
    id: 'v003',
    modelName: '기아 쏘렌토',
    vehicleNumber: '56다 1234',
    manufacturer: '기아',
    fuel: '하이브리드',
    mileage: 15000,
    year: 2023,
    price: 4800,
    imageUrl: 'https://via.placeholder.com/150',
    status: '판매완료',
    createdAt: '2023-10-24',
  },
  {
    id: 'v004',
    modelName: '테슬라 모델3',
    vehicleNumber: '78라 5678',
    manufacturer: '테슬라',
    fuel: '전기',
    mileage: 30000,
    year: 2022,
    price: 5100,
    imageUrl: 'https://via.placeholder.com/150',
    status: '판매중',
    createdAt: '2023-10-23',
  },
]; 
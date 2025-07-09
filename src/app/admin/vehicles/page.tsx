import React from 'react';
import VehiclesClient from '@/components/admin/VehiclesClient';
import { vehicles } from '@/data/admin/vehicles';

export default function VehiclesPage() {
  // 실제 애플리케이션에서는 여기서 API를 통해 데이터를 가져옵니다.
  const allVehicles = vehicles;

  return <VehiclesClient initialVehicles={allVehicles} />;
} 
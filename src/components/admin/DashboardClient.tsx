"use client";

import React from 'react';
import Link from 'next/link';
import { metricCards, MetricCardData, recentActivities } from '@/data/admin/dashboard';
import { vehicles } from '@/data/admin/vehicles';
import { users } from '@/data/admin/users';
import { inquiries } from '@/data/admin/inquiries';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MetricCard: React.FC<MetricCardData> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        {change && (
          <span className={`ml-2 text-sm font-semibold ${changeColor}`}>
            {isIncrease ? '▲' : '▼'} {change}
          </span>
        )}
      </div>
    </div>
  );
};


const ActivityChart: React.FC = () => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-lg text-gray-800">최근 활동</h3>
      <div className="mt-4" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={recentActivities}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visitors" stroke="#8884d8" name="방문자" />
            <Line type="monotone" dataKey="registrations" stroke="#82ca9d" name="차량 등록" />
            <Line type="monotone" dataKey="inquiries" stroke="#ffc658" name="문의" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

interface RecentListProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  viewAllLink: string;
}

const RecentList = <T extends { id: string }>({ title, items, renderItem, viewAllLink }: RecentListProps<T>) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <Link href={viewAllLink} className="text-sm text-blue-600 hover:underline">
        전체 보기
      </Link>
    </div>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item.id} className="border-b last:border-b-0 pb-2 last:pb-0">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  </div>
);

const RecentUpdates: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <RecentList
        title="최근 등록 차량"
        items={vehicles.slice(0, 5)}
        viewAllLink="/admin/vehicles"
        renderItem={(item) => (
          <div className="flex justify-between text-sm">
            <span>{item.modelName} ({item.vehicleNumber})</span>
            <span className="text-gray-500">{item.createdAt}</span>
          </div>
        )}
      />
      <RecentList
        title="최근 가입 회원"
        items={users.slice(0, 5)}
        viewAllLink="/admin/users"
        renderItem={(item) => (
          <div className="flex justify-between text-sm">
            <span>{item.name} ({item.email})</span>
            <span className="text-gray-500">{item.createdAt}</span>
          </div>
        )}
      />
      <RecentList
        title="최신 문의 내역"
        items={inquiries.slice(0, 5)}
        viewAllLink="/admin/inquiries"
        renderItem={(item) => (
          <div className="flex justify-between text-sm">
            <span>{item.author}: {item.content.substring(0, 20)}...</span>
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{item.type}</span>
          </div>
        )}
      />
    </div>
  );
};


const DashboardClient: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">대시보드</h1>
      <p className="mt-1 text-gray-600">관리자 시스템의 주요 현황입니다.</p>
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card) => (
          <MetricCard key={card.title} {...card} />
        ))}
      </div>
      
      <ActivityChart />

      <RecentUpdates />
    </div>
  );
};

export default DashboardClient; 
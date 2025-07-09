import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-lg shadow-lg">
    <span className="text-3xl sm:text-4xl font-bold text-blue-600">{value}</span>
    <span className="mt-2 text-lg text-zinc-600">{label}</span>
  </div>
);

const UserStatsSection: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-6xl md:grid-cols-3">
        <StatCard value="12,345건" label="누적 견적 요청" />
        <StatCard value="98%" label="고객 만족도" />
        <StatCard value="5,678대" label="출고 완료" />
      </div>
    </section>
  );
};

export default UserStatsSection;

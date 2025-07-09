import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0a.75.75 0 001.085.67l.416-.207m-1.5-2.083a.75.75 0 01-1.085.67V10.5m1.5 0a.75.75 0 00-1.085.67l-.416-.207m0 0l-.415.207A.75.75 0 016 10.5v-1.5a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v1.5m0 0l.416.207a.75.75 0 001.085-.67v-1.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5m6 0a.75.75 0 00.75-.75v-1.5a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v1.5m0 0l-.416.207a.75.75 0 01-1.085-.67v-1.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5" />
      </svg>
    ),
    title: "신차견적",
    description: "가장 경쟁력 있는 신차 견적을 받아보세요.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068M15.75 21a9 9 0 11-3.75-3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "중고차",
    description: "엄선된 중고차를 합리적인 가격에 만나보세요.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "금융비교",
    description: "최적의 금융 상품을 비교하고 선택하세요.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "내차팔기",
    description: "소중한 내 차, 최고의 가격에 판매하세요.",
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="w-16 h-16 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-zinc-800">{title}</h3>
    <p className="mt-2 text-zinc-600">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;

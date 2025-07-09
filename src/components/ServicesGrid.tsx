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
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 21h2.25m-2.25 0h-1.5m-1.5 0H5.25m-1.5 0h-1.5M2.25 18.75V5.25a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25z" />
      </svg>
    ),
    title: "신차견적",
    description: "가장 경쟁력 있는 신차 견적을 받아보세요.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
        <path fillRule="evenodd" d="M1.5 6A2.25 2.25 0 013.75 3.75h.879a2.25 2.25 0 012.15 1.586l.524 1.747A2.25 2.25 0 009.75 9.75h4.5a2.25 2.25 0 002.15-1.586l.525-1.747A2.25 2.25 0 0120.25 3.75h.879a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 16.5V6zM3 12.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-.008zm16.5 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
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

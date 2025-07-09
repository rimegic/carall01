import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 w-full text-center bg-gray-50 rounded-lg">
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
          카올은 어떤 서비스인가요?
        </h2>
        <p className="mt-4 text-lg leading-7 text-zinc-600">
          카올은 신차, 중고차 구매부터 금융 비교, 판매까지 자동차와 관련된 모든 것을 한 곳에서 해결할 수 있는 원스톱 플랫폼입니다. 복잡하고 어려운 자동차 구매 과정을 단순하고 투명하게 만들어, 누구나 쉽고 편리하게 최고의 조건으로 차량을 구매할 수 있도록 돕습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

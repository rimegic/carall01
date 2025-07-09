import React from 'react';

const ContactWidget: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <p className="font-bold text-zinc-800">상담문의</p>
        <p className="text-2xl font-bold text-blue-600">1588-1588</p>
        <p className="text-sm text-zinc-500">평일 09:00 ~ 18:00</p>
      </div>
      <a 
        href="/quote"
        className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg text-center hover:bg-blue-700 transition-colors"
      >
        상담 신청
      </a>
    </div>
  );
};

export default ContactWidget;

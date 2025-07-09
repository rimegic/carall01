import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-zinc-800 text-zinc-400">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left w-full max-w-6xl px-8 py-12 gap-10 md:gap-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white">카올</h3>
          <p className="mt-4">자동차의 모든 것, 카올과 함께</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white">서비스</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">신차견적</a></li>
              <li><a href="#" className="hover:text-white">중고차</a></li>
              <li><a href="#" className="hover:text-white">금융비교</a></li>
              <li><a href="#" className="hover:text-white">내차팔기</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white">고객지원</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">공지사항</a></li>
              <li><a href="#" className="hover:text-white">자주묻는질문</a></li>
              <li><a href="#" className="hover:text-white">1:1 문의</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-4 text-center border-t border-zinc-700">
        <p>&copy; {new Date().getFullYear()} Car All. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

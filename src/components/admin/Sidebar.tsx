import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white text-gray-800 flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold text-blue-600 border-b">
        <Link href="/admin">
          카올 Admin
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          대시보드
        </Link>
        <Link href="/admin/vehicles" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          차량 관리
        </Link>
        <Link href="/admin/brands" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          제조사/모델 관리
        </Link>
        <Link href="/admin/users" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          회원 관리
        </Link>
        <Link href="/admin/content" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          콘텐츠 관리
        </Link>
        <Link href="/admin/inquiries" className="block px-4 py-2 rounded-md hover:bg-gray-100">
          문의 관리
        </Link>
      </nav>
      <div className="p-4 border-t">
        <Link href="/" className="block text-center text-sm text-gray-600 hover:text-blue-600">
          메인 사이트로 돌아가기
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar; 
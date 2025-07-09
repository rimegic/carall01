"use client";

import React, { useState, useMemo } from 'react';
import { News } from '@/data/admin/news';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface NewsClientProps {
  initialNews: News[];
}

const PAGE_SIZE = 10;

const NewsClient: React.FC<NewsClientProps> = ({ initialNews }) => {
  const [news, setNews] = useState<News[]>(initialNews);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleDelete = (newsId: string) => {
    if (window.confirm('정말로 이 소식을 삭제하시겠습니까?')) {
      setNews(prev => prev.filter(n => n.id !== newsId));
    }
  };

  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [news]);
  
  const totalPages = Math.ceil(sortedNews.length / PAGE_SIZE);
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return sortedNews.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, sortedNews]);

  const getStatusChip = (status: 'published' | 'draft') => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center pb-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800">새로운 소식 관리</h1>
            <Link href="/admin/news/new" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                새 소식 작성
            </Link>
        </header>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">제목</th>
                <th scope="col" className="px-6 py-3">작성일</th>
                <th scope="col" className="px-6 py-3">상태</th>
                <th scope="col" className="px-6 py-3">관리</th>
              </tr>
            </thead>
            <tbody>
              {paginatedNews.map((item) => (
                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChip(item.status)}`}>
                      {item.status === 'published' ? '게시중' : '초안'}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-4">
                    <Link href={`/admin/news/${item.id}`} className="font-medium text-blue-600 hover:underline">수정</Link>
                    <button onClick={() => handleDelete(item.id)} className="font-medium text-red-600 hover:underline">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-700">
                총 {sortedNews.length}개 중 {Math.min(((currentPage - 1) * PAGE_SIZE) + 1, sortedNews.length)}-{Math.min(currentPage * PAGE_SIZE, sortedNews.length)}
            </span>
            <div className="inline-flex -space-x-px">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50">
                이전
            </button>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50">
                다음
            </button>
            </div>
        </div>
    </div>
  );
};

export default NewsClient; 
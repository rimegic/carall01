"use client";

import React, { useState, useEffect } from 'react';
import Editor from '@/components/admin/Editor';
import { useRouter } from 'next/navigation';
import { News } from '@/data/admin/news';

export interface NewsFormProps {
  initialData?: News | null;
}

export const NewsForm: React.FC<NewsFormProps> = ({ initialData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('draft');
  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newsData = {
      id: initialData ? initialData.id : `n${Date.now()}`,
      title,
      content,
      status,
      createdAt: initialData ? initialData.createdAt : new Date().toISOString().split('T')[0],
    };
    
    console.log('Saving news:', newsData);
    if (initialData) {
      alert('소식이 수정되었습니다. (콘솔에서 확인)');
    } else {
      alert('새로운 소식이 생성되었습니다. (콘솔에서 확인)');
    }
    router.push('/admin/news');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
       <header className="pb-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">
          {initialData ? '소식 수정' : '새로운 소식 작성'}
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">제목</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">내용</label>
          <div className="mt-1">
             <Editor value={content} onChange={setContent} />
          </div>
        </div>
        <div className="pt-8">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">상태</label>
            <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'published' | 'draft')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
                <option value="draft">초안</option>
                <option value="published">게시</option>
            </select>
        </div>
        <div className="flex justify-end gap-4">
            <button type="button" onClick={() => router.push('/admin/news')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">
                취소
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                저장
            </button>
        </div>
      </form>
    </div>
  );
}; 
export const runtime = 'edge';
"use client";

import React from 'react';
import { news as mockNews } from '@/data/admin/news';
import { NewsForm } from '@/components/admin/NewsForm';

const EditNewsPage = ({ params }: { params: { id: string } }) => {
  const newsItem = mockNews.find(n => n.id === params.id);
  
  if (!newsItem) {
    return <div>뉴스를 찾을 수 없습니다.</div>;
  }

  return <NewsForm initialData={newsItem} />;
};

export default EditNewsPage; 
import React from 'react';
import { news } from '@/data/admin/news';
import NewsClient from '@/components/admin/NewsClient';

const NewsPage = () => {
  return (
    <div>
      <NewsClient initialNews={news} />
    </div>
  );
};

export default NewsPage; 
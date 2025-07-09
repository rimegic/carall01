import React from 'react';
import { newsItems, NewsItem } from '@/data/newsData';

const NewsSection: React.FC = () => {
  return (
    <section className="flex flex-col self-center px-5 w-full max-w-[1240px]">
      <header className="flex flex-col items-center self-center pb-7 text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal text-center text-blue-600">
        <h2>NEW UPDATE</h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 w-full">
        {newsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

const NewsCard: React.FC<NewsItem> = ({ id, title, modelName, image, price, category, engine }) => {
  return (
    <article className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a href={`/news/${id}`} className="flex flex-col h-full">
        <header className="flex-shrink-0 px-2 py-2.5 text-lg text-center text-zinc-800 font-semibold bg-gray-50">
          <h3>{title}</h3>
        </header>
        <div className="flex-grow flex flex-col">
          <div className="p-1.5 bg-white border-b border-stone-300">
            <div className="py-1 text-center text-lg text-zinc-800">
              <h4>{modelName}</h4>
            </div>
            <img
              src={image}
              alt={`${title} - ${modelName}`}
              className="object-cover w-full h-48"
            />
          </div>
          <div className="p-3 w-full text-sm text-white bg-zinc-800 flex-grow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">가격</span>
              <span>{price}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">차종</span>
              <span>{category}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">엔진</span>
              <span>{engine}</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default NewsSection;

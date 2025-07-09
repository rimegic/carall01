export interface NewsItem {
  id: number;
  title: string;
  modelName: string;
  image: string;
  price: string;
  category: string;
  engine: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: '더 뉴 투싼, 이렇게 달라졌다',
    modelName: '더 뉴 투싼',
    image: '/images/news/tucson.png',
    price: '2,771만 원부터',
    category: '준중형 SUV',
    engine: '1.6T 가솔린',
  },
  {
    id: 2,
    title: '더 뉴 스포티지 출시',
    modelName: '더 뉴 스포티지',
    image: '/images/news/sportage.png',
    price: '2,539만 원부터',
    category: '준중형 SUV',
    engine: '1.6T 가솔린',
  },
  {
    id: 3,
    title: '더 뉴 K5, 어떻게 달라졌나?',
    modelName: '더 뉴 K5',
    image: '/images/news/k5.png',
    price: '2,784만 원부터',
    category: '중형 세단',
    engine: '2.0 가솔린',
  },
  {
    id: 4,
    title: '뉴 디스커버리 스포츠',
    modelName: '뉴 디스커버리 스포츠',
    image: '/images/news/discovery-sport.png',
    price: '7,290만 원부터',
    category: '중형 SUV',
    engine: 'P250 S',
  },
]; 
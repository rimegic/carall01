export type ReviewStatus = '승인 대기' | '게시중' | '숨김';

export interface Review {
  id: string;
  author: string;
  vehicle: string;
  content: string;
  rating: number;
  createdAt: string;
  status: ReviewStatus;
}

export const reviews: Review[] = [
  {
    id: 'r001',
    author: '김*현',
    vehicle: '제네시스 G80',
    content: '상담사분이 정말 친절하시고, 원하는 조건에 딱 맞는 차량을 찾을 수 있었어요.',
    rating: 5,
    createdAt: '2023-10-20',
    status: '게시중',
  },
  {
    id: 'r002',
    author: '이*나',
    vehicle: 'BMW 5시리즈',
    content: '다른 곳보다 훨씬 저렴하게 구매했습니다. 비교 견적 시스템이 정말 편리하고 좋네요.',
    rating: 5,
    createdAt: '2023-10-18',
    status: '게시중',
  },
  {
    id: 'r003',
    author: '박*훈',
    vehicle: '기아 쏘렌토',
    content: '광고가 너무 많아서 좀 불편해요.',
    rating: 2,
    createdAt: '2023-10-15',
    status: '승인 대기',
  },
  {
    id: 'r004',
    author: '최*정',
    vehicle: '테슬라 모델 Y',
    content: '출고까지 신경 써주셔서 감사했어요. 과정이 투명해서 믿음이 갔습니다.',
    rating: 5,
    createdAt: '2023-10-12',
    status: '숨김',
  },
]; 
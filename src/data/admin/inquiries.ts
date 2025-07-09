export type InquiryStatus = '신규' | '처리중' | '완료';
export type InquiryType = '신차견적' | '중고차 문의' | '내차팔기' | '기타';

export interface Inquiry {
  id: string;
  type: InquiryType;
  author: string;
  contact: string;
  content: string;
  createdAt: string;
  status: InquiryStatus;
  assignee?: string;
}

export const inquiries: Inquiry[] = [
  {
    id: 'i001',
    type: '신차견적',
    author: '홍길동',
    contact: '010-1234-5678',
    content: '현대 그랜저 하이브리드 최상위 트림 견적 부탁드립니다. 추가 옵션 포함해서요.',
    createdAt: '2023-10-26',
    status: '신규',
  },
  {
    id: 'i002',
    type: '내차팔기',
    author: '김영미',
    contact: '010-8765-4321',
    content: '2020년식 BMW X5 판매하고 싶습니다. 주행거리는 5만km입니다. 예상 가격 알 수 있을까요?',
    createdAt: '2023-10-25',
    status: '처리중',
    assignee: '김철수 담당자',
  },
  {
    id: 'i003',
    type: '기타',
    author: '이민호',
    contact: '010-1111-2222',
    content: '사이트 이용 중 오류가 발생했습니다. 로그인이 자꾸 풀려요.',
    createdAt: '2023-10-24',
    status: '완료',
    assignee: '시스템 관리자',
  },
]; 
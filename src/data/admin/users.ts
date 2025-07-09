export type UserStatus = '활성' | '비활성';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: UserStatus;
  lastLogin: string;
}

export const users: User[] = [
  {
    id: 'u001',
    name: '김철수',
    email: 'chulsoo.kim@example.com',
    createdAt: '2023-01-15',
    status: '활성',
    lastLogin: '2023-10-26',
  },
  {
    id: 'u002',
    name: '이영희',
    email: 'younghee.lee@example.com',
    createdAt: '2023-02-20',
    status: '활성',
    lastLogin: '2023-10-25',
  },
  {
    id: 'u003',
    name: '박지성',
    email: 'jisung.park@example.com',
    createdAt: '2023-03-10',
    status: '비활성',
    lastLogin: '2023-08-01',
  },
  {
    id: 'u004',
    name: '최민준',
    email: 'minjun.choi@example.com',
    createdAt: '2023-04-05',
    status: '활성',
    lastLogin: '2023-10-22',
  },
]; 
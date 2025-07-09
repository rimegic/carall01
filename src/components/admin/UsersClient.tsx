"use client";

import React, { useState, useMemo } from 'react';
import { User, UserStatus } from '@/data/admin/users';
import Image from 'next/image';

interface UsersClientProps {
  initialUsers: User[];
}

const PAGE_SIZE = 10;

const UsersClient: React.FC<UsersClientProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<UserStatus | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const toggleUserStatus = (userId: string) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, status: user.status === '활성' ? '비활성' : '활성' }
          : user
      )
    );
  };
  
  const filteredUsers = useMemo(() => {
    let filtered = users;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(u => u.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, statusFilter, users]);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredUsers.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredUsers]);
  
  const getStatusChip = (status: UserStatus) => {
    return status === '활성' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <header className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">사용자 관리</h1>
      </header>

      <div className="mt-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="이름 또는 이메일 검색..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-auto flex-grow sm:flex-grow-0 max-w-sm px-4 py-2 border rounded-md"
        />
        <select 
          onChange={(e) => {
            setStatusFilter(e.target.value as UserStatus | 'all');
            setCurrentPage(1);
          }} 
          className="px-4 py-2 border rounded-md bg-white"
        >
          <option value="all">모든 상태</option>
          <option value="활성">활성</option>
          <option value="비활성">비활성</option>
        </select>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">사용자</th>
              <th scope="col" className="px-6 py-3">이메일</th>
              <th scope="col" className="px-6 py-3">가입일</th>
              <th scope="col" className="px-6 py-3">상태</th>
              <th scope="col" className="px-6 py-3">관리</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <Image src="https://via.placeholder.com/40" alt={user.name} width={40} height={40} className="rounded-full" />
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.createdAt}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChip(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => toggleUserStatus(user.id)} 
                    className="font-medium text-blue-600 hover:underline"
                  >
                    상태 변경
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-700">
          총 {filteredUsers.length}개 중 {Math.min(((currentPage - 1) * PAGE_SIZE) + 1, filteredUsers.length)}-{Math.min(currentPage * PAGE_SIZE, filteredUsers.length)}
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

export default UsersClient; 
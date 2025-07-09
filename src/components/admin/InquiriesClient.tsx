"use client";

import React, { useState, useMemo } from 'react';
import { Inquiry, InquiryStatus } from '@/data/admin/inquiries';
import Modal from '@/components/admin/Modal';

interface InquiriesClientProps {
  initialInquiries: Inquiry[];
}

const PAGE_SIZE = 10;

const InquiriesClient: React.FC<InquiriesClientProps> = ({ initialInquiries }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [statusFilter, setStatusFilter] = useState<InquiryStatus | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Detail Modal states
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const cycleInquiryStatus = (inquiryId: string) => {
    const statusCycle: InquiryStatus[] = ['신규', '처리중', '완료'];
    setInquiries(prev =>
      prev.map(inquiry => {
        if (inquiry.id === inquiryId) {
          const currentIndex = statusCycle.indexOf(inquiry.status);
          const nextIndex = (currentIndex + 1) % statusCycle.length;
          return { ...inquiry, status: statusCycle[nextIndex] };
        }
        return inquiry;
      })
    );
  };

  const handleViewDetail = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDetailModalOpen(true);
  };
  
  const filteredInquiries = useMemo(() => {
    let filtered = inquiries;
    if (statusFilter !== 'all') {
      filtered = filtered.filter(i => i.status === statusFilter);
    }
    return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [statusFilter, inquiries]);

  const totalPages = Math.ceil(filteredInquiries.length / PAGE_SIZE);
  const paginatedInquiries = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredInquiries.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredInquiries]);
  
  const getStatusChip = (status: InquiryStatus) => {
    switch(status) {
      case '신규': return 'bg-yellow-100 text-yellow-800';
      case '처리중': return 'bg-blue-100 text-blue-800';
      case '완료': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center pb-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800">고객 문의 관리</h1>
        </header>
        <div className="mt-6 flex flex-wrap gap-4 items-center">
            <select 
            onChange={(e) => {
                setStatusFilter(e.target.value as InquiryStatus | 'all');
                setCurrentPage(1);
            }} 
            className="px-4 py-2 border rounded-md bg-white"
            >
            <option value="all">모든 상태</option>
            <option value="신규">신규</option>
            <option value="처리중">처리중</option>
            <option value="완료">완료</option>
            </select>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">문의자</th>
                <th scope="col" className="px-6 py-3">유형</th>
                <th scope="col" className="px-6 py-3">문의일</th>
                <th scope="col" className="px-6 py-3">상태</th>
                <th scope="col" className="px-6 py-3">관리</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{inquiry.author}</td>
                  <td className="px-6 py-4">{inquiry.type}</td>
                  <td className="px-6 py-4">{inquiry.createdAt}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChip(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-4">
                    <button onClick={() => handleViewDetail(inquiry)} className="font-medium text-green-600 hover:underline">상세 보기</button>
                    <button onClick={() => cycleInquiryStatus(inquiry.id)} className="font-medium text-blue-600 hover:underline">상태 변경</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-700">
            총 {filteredInquiries.length}개 중 {Math.min(((currentPage - 1) * PAGE_SIZE) + 1, filteredInquiries.length)}-{Math.min(currentPage * PAGE_SIZE, filteredInquiries.length)}
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
      
      {selectedInquiry && (
        <Modal isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)} title="문의 상세 정보">
          <div className="space-y-4">
            <div><strong>문의 유형:</strong> {selectedInquiry.type}</div>
            <div><strong>작성자:</strong> {selectedInquiry.author}</div>
            <div><strong>연락처:</strong> {selectedInquiry.contact}</div>
            <div><strong>문의일:</strong> {selectedInquiry.createdAt}</div>
            <div><strong>상태:</strong> {selectedInquiry.status}</div>
            <div className="p-2 bg-gray-50 rounded-md">
                <strong>문의 내용:</strong>
                <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{selectedInquiry.content}</p>
            </div>
            <div>
              <label htmlFor="assignee" className="block text-sm font-medium text-gray-700">담당자 지정</label>
              <input type="text" name="assignee" id="assignee" defaultValue={selectedInquiry.assignee || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="reply" className="block text-sm font-medium text-gray-700">답변 작성</label>
              <textarea name="reply" id="reply" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <div className="flex justify-end gap-4 pt-4">
                <button type="button" onClick={() => setIsDetailModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">취소</button>
                <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md">저장</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default InquiriesClient; 
"use client";

import React, { useState, useMemo } from 'react';
import { Review, ReviewStatus } from '@/data/admin/reviews';
import Modal from '@/components/admin/Modal';

interface ReviewsClientProps {
  initialReviews: Review[];
}

const PAGE_SIZE = 10;

const ReviewsClient: React.FC<ReviewsClientProps> = ({ initialReviews }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [statusFilter, setStatusFilter] = useState<ReviewStatus | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const toggleReviewStatus = (reviewId: string) => {
    setReviews(prev =>
      prev.map(review =>
        review.id === reviewId
          ? { ...review, status: review.status === '게시중' ? '숨김' : '게시중' }
          : review
      )
    );
  };
  
  const handleDelete = (review: Review) => {
    setSelectedReview(review);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedReview) {
      setReviews(prev => prev.filter(r => r.id !== selectedReview.id));
      setIsDeleteModalOpen(false);
      setSelectedReview(null);
    }
  };

  const filteredReviews = useMemo(() => {
    let filtered = reviews;
    if (statusFilter !== 'all') {
      filtered = filtered.filter(r => r.status === statusFilter);
    }
    return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [statusFilter, reviews]);

  const totalPages = Math.ceil(filteredReviews.length / PAGE_SIZE);
  const paginatedReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredReviews.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, filteredReviews]);
  
  const getStatusChip = (status: ReviewStatus) => {
    return status === '게시중' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const renderRating = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center pb-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800">리뷰 관리</h1>
        </header>

        <div className="mt-6 flex flex-wrap gap-4 items-center">
            <select 
            onChange={(e) => setStatusFilter(e.target.value as ReviewStatus | 'all')} 
            className="px-4 py-2 border rounded-md bg-white"
            >
            <option value="all">모든 상태</option>
            <option value="게시중">게시중</option>
            <option value="숨김">숨김</option>
            </select>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">작성자</th>
                <th scope="col" className="px-6 py-3">평점</th>
                <th scope="col" className="px-6 py-3">리뷰 내용</th>
                <th scope="col" className="px-6 py-3">작성일</th>
                <th scope="col" className="px-6 py-3">상태</th>
                <th scope="col" className="px-6 py-3">관리</th>
              </tr>
            </thead>
            <tbody>
              {paginatedReviews.map((review) => (
                <tr key={review.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{review.author}</td>
                  <td className="px-6 py-4 text-yellow-400">{renderRating(review.rating)}</td>
                  <td className="px-6 py-4 max-w-sm truncate">{review.content}</td>
                  <td className="px-6 py-4">{review.createdAt}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusChip(review.status)}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-4">
                    <button onClick={() => toggleReviewStatus(review.id)} className="font-medium text-blue-600 hover:underline">
                      {review.status === '게시중' ? '숨기기' : '게시하기'}
                    </button>
                    <button onClick={() => handleDelete(review)} className="font-medium text-red-600 hover:underline">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
            <span className="text-sm text-gray-700">
            총 {filteredReviews.length}개 중 {Math.min(((currentPage - 1) * PAGE_SIZE) + 1, filteredReviews.length)}-{Math.min(currentPage * PAGE_SIZE, filteredReviews.length)}
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

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="리뷰 삭제 확인">
        <div>
          <p>정말로 이 리뷰를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
          <div className="mt-6 flex justify-end gap-4">
            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">취소</button>
            <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">삭제</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewsClient; 
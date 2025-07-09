import React from 'react';

interface Review {
  id: number;
  author: string;
  vehicle: string;
  content: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    author: '김*현',
    vehicle: '제네시스 G80',
    content: '상담사분이 정말 친절하시고, 원하는 조건에 딱 맞는 차량을 찾을 수 있었어요. 다음에도 카올 이용할 거예요!',
    rating: 5,
  },
  {
    id: 2,
    author: '이*나',
    vehicle: 'BMW 5시리즈',
    content: '다른 곳보다 훨씬 저렴하게 구매했습니다. 비교 견적 시스템이 정말 편리하고 좋네요. 강력 추천합니다.',
    rating: 5,
  },
  {
    id: 3,
    author: '박*훈',
    vehicle: '기아 쏘렌토',
    content: '덕분에 패밀리카 잘 구매했습니다. 출고까지 신경 써주셔서 감사했어요. 과정이 투명해서 믿음이 갔습니다.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard: React.FC<Review> = ({ author, vehicle, content, rating }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg font-bold text-zinc-800">{author} 고객님</p>
          <p className="text-sm text-zinc-500">{vehicle} 구매</p>
        </div>
        <StarRating rating={rating} />
      </div>
      <p className="mt-4 text-zinc-600">"{content}"</p>
    </div>
  );
};

const UserReviewsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800">생생한 구매 후기</h2>
          <p className="mt-2 text-lg text-zinc-500">카올과 함께한 고객님들의 이야기를 확인해보세요.</p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviewsSection; 
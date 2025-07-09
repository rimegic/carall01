import React from 'react';
import { reviews } from '@/data/admin/reviews';
import ReviewsClient from '@/components/admin/ReviewsClient';

const ReviewsPage = () => {
  return (
    <div>
      <ReviewsClient initialReviews={reviews} />
    </div>
  );
};

export default ReviewsPage; 
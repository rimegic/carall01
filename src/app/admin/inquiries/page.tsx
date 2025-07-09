import React from 'react';
import { inquiries } from '@/data/admin/inquiries';
import InquiriesClient from '@/components/admin/InquiriesClient';

const InquiriesPage = () => {
  return (
    <div>
      <InquiriesClient initialInquiries={inquiries} />
    </div>
  );
};

export default InquiriesPage; 
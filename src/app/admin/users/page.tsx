import React from 'react';
import { users } from '@/data/admin/users';
import UsersClient from '@/components/admin/UsersClient';

const UsersPage = () => {
  // In a real app, this would be an API call
  return (
    <div>
      <UsersClient initialUsers={users} />
    </div>
  );
};

export default UsersPage; 
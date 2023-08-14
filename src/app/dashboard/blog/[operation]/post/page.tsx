'use client';

import RightSidebar from '@/components/dashboard/sidebar/right';
import CreateBlogPost from '@/components/dashboard/operation/create';
import React from 'react';
import { useParams } from 'next/navigation';

interface Props {}

const PostOperation = () => {
  const { operation } = useParams();

  console.log('operation', operation);
  switch (operation) {
    case 'create':
      return (
        <section className='flex-1 flex w-full'>
          <CreateBlogPost />
        </section>
      );
    case 'update':
      return <CreateBlogPost />;
    case 'preview':
      return <CreateBlogPost />;

    default:
      return <p>404</p>;
  }
};

export default PostOperation;

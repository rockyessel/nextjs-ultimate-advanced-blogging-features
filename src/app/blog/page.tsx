import Card from '@/components/blog/card';
import React from 'react';

interface Props {}

const Blog = () => {
  return (
    <div className='shadow-lg rounded-lg'>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Blog;

import React from 'react';
import Card from '@/components/blog/card';

interface Props {}

const BlogPage = () => {
  return (
    <div>
      <div>{/* <BlogSection /> */}</div>

      <div>
        <div className='flex items-center gap-2 overflow-x-scroll'>
          <div>
            <ul className='flex items-center gap-2'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

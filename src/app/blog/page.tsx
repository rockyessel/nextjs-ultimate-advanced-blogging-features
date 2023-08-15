'use client';

import BlogSection from '@/components/blog/hero/blog-section';
import Card from '@/components/blog/card';
import React from 'react';

interface Props {}

const Blog = () => {
  const cardContainerRef = React.useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      console.log('move back');
      cardContainerRef.current.scrollBy({
        left: -300, // Adjust this value to control the scroll amount
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    console.log('move forward');
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, // Adjust this value to control the scroll amount
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div>
        <BlogSection />
      </div>

      <div>
        <div className='flex items-center gap-2 overflow-x-scroll'>
          <div>
            <ul ref={cardContainerRef} className='flex items-center gap-2'>
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
        <div className='flex justify-center mt-2'>
          <button
            onClick={scrollLeft}
            className='px-4 py-2 bg-gray-300 hover:bg-gray-400'
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className='px-4 py-2 bg-gray-300 hover:bg-gray-400'
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

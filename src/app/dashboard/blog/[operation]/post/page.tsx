import RightSidebar from '@/components/dashboard/sidebar/right';
import CreateBlogPost from '@/components/dashboard/operation/create';
import React from 'react';

interface Props {}

const PostOperation = () => {
  return (
    <section className='flex bg-white'>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            className='inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200'
          >
            Add cover
          </button>
          <button
            type='button'
            className='inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200'
          >
            Add Caption
          </button>
          <button
            type='button'
            className='inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200'
          >
            Publish
          </button>
          <button
            type='button'
            className='inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200'
          >
            Preview
          </button>
          <button
            type='button'
            className='inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200'
          >
            Saved
          </button>
        </div>

        <CreateBlogPost />
      </div>

      <RightSidebar />
    </section>
  );
};

export default PostOperation;

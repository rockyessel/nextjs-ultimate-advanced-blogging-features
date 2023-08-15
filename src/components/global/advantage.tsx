import React from 'react';
import { BsMarkdown, BsMic, BsPostcardHeart } from 'react-icons/bs';
import { TbLayersLinked } from 'react-icons/tb';
import { PiChatsCircleFill } from 'react-icons/pi';

interface Props {}

const AdvantageSection = () => {
  return (
    <div className='py-16 bg-gray-50 overflow-hidden'>
      <div className='container m-auto px-6 space-y-8 text-gray-500 md:px-12'>
        <div>
          <span className='text-gray-600 text-lg font-semibold'>
            Main Advantage
          </span>
          <h2 className='mt-4 text-2xl text-gray-900 font-bold md:text-4xl'>
            Bloggkie A Platform For Developers To Start, Build, And Document
            Their Coding Journey
            <br className='lg:block' /> and here are the current implemeted
            features we have now.
          </h2>
        </div>
        <div className='mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4'>
          <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <span className='flex h-12 w-12 items-center justify-center rounded-md border-[1px] bg-yellow-500'>
                <BsMarkdown className='text-white' />
              </span>

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Markdown
                </h5>
                <p className='text-sm text-gray-600'>
                  Simplified formatting language for devs. Create clear docs
                  with minimal effort using plain text and symbols.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <TbLayersLinked />
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <span className='flex h-12 w-12 items-center justify-center rounded-md border-[1px] bg-yellow-500'>
                <BsMic className='text-white' />
              </span>

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Active Speaker
                </h5>
                <p className='text-sm text-gray-600'>
                  Readers get to hear your content talk without them reading.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <TbLayersLinked />
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <span className='flex h-12 w-12 items-center justify-center rounded-md border-[1px] bg-yellow-500'>
                <PiChatsCircleFill className='text-white' />
              </span>
              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Realtime Chat
                </h5>
                <p className='text-sm text-gray-600'>
                  Each blog post, has a chat implemented, to allow and connect
                  other reads currently reading and actively listening to your
                  content to communicate.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <TbLayersLinked />
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block'>
            <div className='relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90'>
              <span className='flex h-12 w-12 items-center justify-center rounded-md border-[1px] bg-yellow-500'>
                <BsPostcardHeart className='text-white' />
              </span>

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Share Stories
                </h5>
                <p className='text-sm text-gray-600'>
                  This is a feature that allows you to share any event that
                  happening with your readers.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <TbLayersLinked />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;

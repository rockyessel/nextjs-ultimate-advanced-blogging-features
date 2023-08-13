'use client';
import React from 'react';
import { Edge, PageInfo } from '@/interface';
import PlayerBox from '../audio/player-box';
import { BsEye } from 'react-icons/bs';
import {GiWorld} from 'react-icons/gi'

interface Props {
  blogLists: {
    edges: Edge[];
    pageInfo: PageInfo;
  };
}

const Table = (props: Props) => {
  console.log('props', props);

  return (
    <section className=' dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='relative overflow-hidden  dark:bg-gray-800 sm:rounded-lg'>
          <div className='flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 mb-4 bg-white rounded-md'>
            <div className='flex items-center flex-1 space-x-4'>
              <h5>
                <span className='text-gray-500'>All Products:</span>
                <span className='dark:text-white'>123456</span>
              </h5>
              <h5>
                <span className='text-gray-500'>Total sales:</span>
                <span className='dark:text-white'>$88.4k</span>
              </h5>
            </div>
            <div className='flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3'>
              <button
                type='button'
                className='flex items-center justify-center  text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
              >
                <svg
                  className='h-3.5 w-3.5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                  />
                </svg>
                Add new product
              </button>
              <button
                type='button'
                className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='w-4 h-4 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
                Update stocks 1/250
              </button>
              <button
                type='button'
                className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='w-4 h-4 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                  />
                </svg>
                Export
              </button>
            </div>
          </div>
          <div className='overflow-x-auto shadow-md'>
            <table className='bg-white rounded-lg w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase'>
                <tr>
                  <th scope='col' className='p-4'>
                    <div className='flex items-center'>
                      <input
                        id='checkbox-all'
                        type='checkbox'
                        className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label className='sr-only'>checkbox</label>
                    </div>
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Title
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Views
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Likes
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Comments
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Audio
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Chats
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {props?.blogLists?.edges?.map((list, index) => (
                  <tr
                    key={index}
                    className='border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                  >
                    <td className='w-4 px-4 py-3'>
                      <form className='flex items-center'>
                        <label className='sr-only'>checkbox</label>
                        <input title='checkbox' />
                      </form>
                    </td>
                    <th className='flex items-center  font-medium text-gray-900 whitespace-nowrap'>
                      <img
                        src='https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png'
                        alt='iMac Front Image'
                        className='w-auto h-8 mr-3'
                      />
                      {list.node.title}
                    </th>
                    <td className=''>
                      <span className='bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300'>
                        Desktop PC
                      </span>
                    </td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap inline-flex items-center gap-1'>
                      <BsEye />
                      {list?.node.views}
                    </td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap'>
                      {list.node.likes}
                    </td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap'>
                      {list.node.comments.length}
                    </td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <span className='ml-1 text-green-300 bg-green-700 p-1 rounded-md bprder-[1px]'>
                          {list.node.status}
                        </span>
                      </div>
                    </td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap'>
                      {list.node.audio && (
                        <PlayerBox source={list.node.audio} />
                      )}
                    </td>
                    <td className=''>$3.2M</td>
                    <td className=' font-medium text-gray-900 whitespace-nowrap'>
                      Just now
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className='flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0'
            aria-label='Table navigation'
          >
            <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
              Showing
              <span className='font-semibold text-gray-900'>
                1-10
              </span>
              of
              <span className='font-semibold text-gray-900'>
                1000
              </span>
            </span>
            <ul className='inline-flex items-stretch -space-x-px'>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  <span className='sr-only'>Previous</span>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href='#'
                  aria-current='page'
                  className='z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700'
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  <span className='sr-only'>Next</span>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;

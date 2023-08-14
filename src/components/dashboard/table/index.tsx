'use client';
import React from 'react';
import { Edge, PageInfo } from '@/interface';
import PlayerBox from '../audio/player-box';
import { BsEye } from 'react-icons/bs';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

interface Props {
  blogLists: {
    edges: Edge[];
    pageInfo: PageInfo;
  };
}

const Table = (props: Props) => {
  console.log('props', props);

  return (
    <section className=''>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='overflow-hidden sm:rounded-lg'>
     
          <div className='overflow-x-auto shadow-md'>
            <table className='bg-white rounded-lg w-full text-sm text-left '>
              <thead className='text-xs  uppercase'>
                <tr>
                  <th className='p-4'>
                    <div className='flex items-center'>
                      <input
                        title='Checkbox'
                       
                        type='checkbox'
                        className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500'
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
                    <th className='flex items-center  font-medium whitespace-nowrap'>
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
                    <td className=' font-medium whitespace-nowrap inline-flex items-center gap-1'>
                      <BsEye />
                      {list?.node.views}
                    </td>
                    <td className=' font-medium whitespace-nowrap'>
                      {list.node.likes}
                    </td>
                    <td className=' font-medium whitespace-nowrap'>
                      {list.node.comments.length}
                    </td>
                    <td className=' font-medium whitespace-nowrap'>
                      <div className='flex items-center'>
                        <span className='ml-1 text-green-300 bg-green-700 p-1 rounded-md bprder-[1px]'>
                          {list.node.status}
                        </span>
                      </div>
                    </td>
                    <td className=' font-medium whitespace-nowrap'>
                      {list.node.audio && (
                        <PlayerBox source={list.node.audio} />
                      )}
                    </td>
                    <td className=''>$3.2M</td>
                    <td className=' font-medium whitespace-nowrap'>Just now</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav className='flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0'>
            <span className='text-sm font-normal  '>
              Showing
              <span className='font-semibold'>1-10</span>
              of
              <span className='font-semibold'>1000</span>
            </span>
            <ul className='inline-flex items-stretch -space-x-px'>
              <li className='flex items-center justify-center h-full py-1.5 px-3 ml-0  bg-white rounded-l-lg border border-gray-300 '>
                <span className='sr-only'>Previous</span>
                <MdArrowBackIos />
              </li>

              <li className='flex items-center justify-center h-full py-1.5 px-3 leading-tight  bg-white rounded-r-lg border border-gray-300'>
                <span className='sr-only'>Next</span>
                <MdArrowForwardIos />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;

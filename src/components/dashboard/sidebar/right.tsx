import React from 'react';
import Link from 'next/link';
import {
  BiLogOut,
  BiSolidComponent,
  BiSolidDashboard,
  BiSolidUser,
} from 'react-icons/bi';
import { SiPowerpages } from 'react-icons/si';

interface Props {}

const RightSidebar = () => {
  return (
    <aside className='flex-shrink-0 hidden w-64 bg-white border-r overflow-y-auto md:block pb-5 sticky top-10'>
      <nav className='flex flex-col w-full h-full justify-between'>
        <ul className='flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto'>
          <li>
            <Link
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-blue-100'
            >
              <BiSolidDashboard />
              <span className='ml-2 text-sm'> Dashboards </span>
            </Link>
          </li>

          <li>
            <Link
              href='/dashboard/blog'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-blue-100'
            >
              <BiSolidComponent />
              <span className='ml-2 text-sm'>Blog</span>
            </Link>
          </li>

          <li>
            <Link
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-blue-100'
            >
              <SiPowerpages />

              <span className='ml-2 text-sm'> Pages </span>
            </Link>
          </li>
          <li className='mt-2 space-y-2 px-7'></li>
          <li>
            <Link
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-blue-100'
            >
              <BiSolidUser />
              <span className='ml-2 text-sm'> Profile </span>
            </Link>
          </li>
        </ul>

        <div className='flex-shrink-0 px-2 py-4 space-y-2'>
          <button
            type='button'
            className='flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-white'
          >
            <BiLogOut />

            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default RightSidebar;

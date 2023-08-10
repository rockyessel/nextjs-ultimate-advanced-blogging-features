import React from 'react';
import Link from 'next/link'
import { BiLogOut } from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa'

interface Props {}

const Sidebar = () => {
  return (
    <aside className='flex-shrink-0 hidden w-64 bg-white border-r overflow-y-auto dark:border-blue-800 dark:bg-darker md:block'>
      <div className='flex flex-col h-full'>
        {/* <!-- Sidebar links --> */}
        <nav className='flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto'>
          {/* <!-- Dashboards links --> */}
          <div>
            {/* <!-- active & hover classes 'bg-blue-100 dark:bg-blue-600' --> */}
            <a
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600'
            >
              <span aria-hidden='true'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </span>
              <span className='ml-2 text-sm'> Dashboards </span>
              <span className='ml-auto' aria-hidden='true'>
                {/* <!-- active class 'rotate-180' --> */}
                <svg
                  className='w-4 h-4 transition-transform transform'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </span>
            </a>
            <div className='mt-2 space-y-2 px-7'>
              {/* <!-- active & hover classes 'text-gray-700 dark:text-light' --> */}
              {/* <!-- inActive classes 'text-gray-400 dark:text-gray-400' --> */}
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700'
              >
                Default
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Project Mangement
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                E-Commerce
              </Link>
            </div>
          </div>

          {/* <!-- Components links --> */}
          <div>
            {/* <!-- active classes 'bg-blue-100 dark:bg-blue-600' --> */}
            <a
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600'
              role='button'
              aria-haspopup='true'
            >
              <span aria-hidden='true'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                  />
                </svg>
              </span>
              <span className='ml-2 text-sm'> Components </span>
              <span aria-hidden='true' className='ml-auto'>
                {/* <!-- active class 'rotate-180' --> */}
                <svg
                  className='w-4 h-4 transition-transform transform'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </span>
            </a>
            <div className='mt-2 space-y-2 px-7'>
              {/* <!-- active & hover classes 'text-gray-700 dark:text-light' --> */}
              {/* <!-- inActive classes 'text-gray-400 dark:text-gray-400' --> */}
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700'
              >
                Alerts
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700'
              >
                Buttons
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Cards
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Dropdowns
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Forms
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Lists
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Modals
              </Link>
            </div>
          </div>

          {/* <!-- Pages links --> */}
          <div>
            {/* <!-- active classes 'bg-blue-100 dark:bg-blue-600' --> */}
            <a
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600'
            >
              <span>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </span>
              <span className='ml-2 text-sm'> Pages </span>
              <span className='ml-auto'>
                {/* <!-- active class 'rotate-180' --> */}
                <svg
                  className='w-4 h-4 transition-transform transform'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </span>
            </a>
            <div className='mt-2 space-y-2 px-7'>
              {/* <!-- active & hover classes 'text-gray-700 dark:text-light' --> */}
              {/* <!-- inActive classes 'text-gray-400 dark:text-gray-400' --> */}
              <Link
                href='#'
                className='block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700'
              >
                Blank
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700'
              >
                Profile
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Pricing
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Kanban
              </Link>
              <Link
                href='#'
                className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'
              >
                Feed
              </Link>
            </div>
          </div>

          {/* //   <!-- Authentication links --> */}
          <div>
            {/* <!-- active & hover classes 'bg-blue-100 dark:bg-blue-600' --> */}
            <a
              href='#'
              className='flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-blue-100 dark:hover:bg-blue-600'
              role='button'
              aria-haspopup='true'
                      >
                          
                            <FaRegUser/> 
              <span className='ml-2 text-sm'> Profile </span>
              <span className='ml-auto'>
                {/* <!-- active class 'rotate-180' --> */}
                <svg
                  className='w-4 h-4 transition-transform transform'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </span>
            </a>
            <div className='mt-2 space-y-2 px-7'>
              {/* <!-- active & hover classes 'text-gray-700 dark:text-light' --> */}
              {/* <!-- inActive classes 'text-gray-400 dark:text-gray-400' --> */}
              <Link href='/dashboard/settings' className='block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700'>
                Settings
              </Link>
            </div>
          </div>
        </nav>

       {/* Footer */}
        <div className='flex-shrink-0 px-2 py-4 space-y-2'>
          <button
            type='button'
            className='flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark'
          >
            <span>
             <BiLogOut />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

'use client';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import Logo from '@/components/global/logo';
import { TfiLayoutSidebarLeft } from 'react-icons/tfi';
import Link from 'next/link';
import UserMenu from '@/components/global/user-menu';
import NotificationCard from '../notification';

const Navbar = () => {
  return (
    <header>
      <nav className='bg-black text-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button
              title='Sidebar Menu'
              type='button'
              className='hidden p-2 mr-3 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100'
            >
              <TfiLayoutSidebarLeft />
            </button>
            <Logo />
            <form className='hidden lg:block lg:pl-2'>
              <label className='sr-only'>Search</label>
              <div className='relative mt-1 lg:w-96'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <AiOutlineSearch className='text-black' />
                </div>
                <input
                  type='text'
                  name='email'
                  className='bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5'
                  placeholder='Search'
                />
              </div>
            </form>
          </div>
          <div className='flex items-center lg:order-2'>
            <Link
              href='/dashboard/blog/create/post'
              className='hidden sm:inline-flex items-center justify-center text-white px-3 py-1.5 mr-2'
            >
              <IoMdAdd className='text-white' />
              Create Post
            </Link>
            <NotificationCard />
            <UserMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

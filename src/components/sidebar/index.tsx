'use client';
import Link from 'next/link';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import { SidebarList } from '@/lib/constants/sidebar';

const Sidebar = () => {
  return (
    <aside className='flex-shrink-0 hidden w-64 border-r overflow-y-auto md:block h-[93vh] pb-5'>
      <nav className='flex flex-col w-full h-full justify-between'>
        <ul className='flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto'>
          {SidebarList.map((list, index) => (
            <li key={index}>
              <Link
                href={list.slug}
                className='flex items-center p-2 text-gray-500 transition-colors rounded-md hover:bg-blue-100'
              >
                {list.icon}
                <span className='ml-2 text-sm'>{list.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex-shrink-0 px-2 py-4 space-y-2'>
          <button
            onClick={() => signOut()}
            type='button'
            className='flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-black/50 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-1 focus:ring-offset-white'
          >
            <BiLogOut />

            <span>Sign out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

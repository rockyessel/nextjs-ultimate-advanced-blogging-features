import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

const DefaultNavbar = async () => {
  const session = await getServerSession();
  console.log('session:', session);

  // console.log('status', status);

  const NavbarData = [{ name: 'Blog' }, { name: 'Stories' }];

  return (
    <header className='z-[2] w-full flex items-center sticky top-0 justify-between bg-[#11111f] text-white px-4 lg:px-6 py-2.5'>
      <nav className='flex items-center gap-2'>
        {/* <Logo /> */}
        <ul className='flex items-center gap-2'>
          {NavbarData.map((list, index) => (
            <Link key={index} href={`/${list.name.toLowerCase()}`}>
              <li className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium cursor-pointer'>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <nav>
        <ul className='flex items-center lg:order-2'>
          {false ? (
            <>
              <Link href={`/dashboard`}>
                <li className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium cursor-pointer'>
                  Dashboard
                </li>
              </Link>
              {/* <NotificationCard /> */}
              {/* <UserMenu /> */}
            </>
          ) : (
            <Link href={`/authenticate`}>
              <li className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium cursor-pointer'>
                Authenticate
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default DefaultNavbar;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {}

const Navbar = () => {
  const NavbarData = [
    { name: 'Blog' },
    { name: 'Project' },
    { name: 'Contact' },
    { name: 'About' },
  ];

  return (
    <header className='z-[2] w-full flex items-center justify-between bg-[#11111f] text-white px-4 py-2 md:px-40 md:py-5'>
      <nav>
        <ul className='flex items-center gap-2'>
          <Link href={`/`}>
            <li className='cursor-pointer'>
              <Image
                className='w-5 h-5'
                src='/bloggkie.svg'
                width={50}
                height={50}
                alt='Logo'
              />
            </li>
          </Link>
          {NavbarData.map((list, index) => (
            <Link key={index} href={`/${list.name.toLowerCase()}`}>
              <li className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer'>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <nav>
        <ul>
          <Link href={`/authenticate`}>
            <li className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer'>
              Authenticate
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

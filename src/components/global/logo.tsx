import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {}

const Logo = () => {
  return (
    <Link href='/' className='flex mr-4'>
      <Image
        src='/bloggkie.svg'
        className='mr-3 w-8 h-8'
        width={50}
        height={50}
        alt='Bloggkie'
      />
      <span className='self-center text-2xl font-semibold whitespace-nowrap'>
        Bloggkie
      </span>
    </Link>
  );
};

export default Logo;

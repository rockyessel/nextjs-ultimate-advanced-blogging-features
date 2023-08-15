import React from 'react';
import Link from 'next/link';

interface Props {}

const HeroSection = () => {
  return (
    <section className='py-24 flex items-center justify-center'>
      <div className='mx-auto max-w-[43rem]'>
        <div className='text-center'>
          <p className='text-lg font-medium leading-8 text-yellow-500'>
            Unleash Your Developer Creativity
          </p>
          <h1 className='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black'>
            Share Your Insights with the World of Code
          </h1>
          <p className='mt-3 text-lg leading-relaxed text-slate-400'>
            Bloggkie empowers developers to express their ideas, tutorials, and
            experiences in the realm of coding and technology — effortlessly.
          </p>
        </div>

        <div className='mt-6 flex items-center justify-center gap-4'>
          <Link
            href='/authenticate'
            className='transform rounded-md bg-yellow-500 px-5 py-3 font-medium text-white transition-colors hover:bg-black/30'
          >
            Start Writing Today
          </Link>
          <Link
            href='/blog'
            className='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

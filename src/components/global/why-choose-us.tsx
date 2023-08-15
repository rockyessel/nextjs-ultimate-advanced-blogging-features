import React from 'react';

interface Props {}

const WhyChooseUs = () => {
  return (
    <div className='bg-black'>
      <section
        id='features'
        className='relative block px-6 py-10 md:py-20 md:px-10 bg-neutral-900/30'
      >
        <div className='relative mx-auto max-w-5xl text-center'>
          <span className='text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider'>
            Want to use out platform?
          </span>
          <h2 className='block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl'>
            A <span className='text-yellow-500'>Platform</span> Made By{' '}
            <span className='text-yellow-500'>Developers</span> For{' '}
            <span className='text-yellow-500'>Developers</span>
          </h2>
          <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
            The core essence of our platform revolves around empowering aspiring
            developers to embark on a journey of documentation, enabling them to
            openly discuss challenges they&apos;ve triumphed over, and fostering
            the growth of their technical writing prowess with unparalleled
            ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;

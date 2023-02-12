import React from 'react';
import { Hero } from '../components';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <main className='w-full flex flex-col py-10 px-6'>
        <div className='flex flex-col gap-5 mb-10'>
          <p className='text-3xl font-bold'>Topic Match for you</p>

          <div className='flex gap-5 font-medium overflow-x-auto'>
            <button className='px-6 py-2 border border-black/10 bg-black text-white'>
              All
            </button>
            <button className='px-6 py-2 border border-black/10'>Movies</button>
            <button className='px-6 py-2 border border-black/10'>Anime</button>
            <button className='px-6 py-2 border border-black/10'>
              Metaverse
            </button>
            <button className='px-6 py-2 border border-black/10'>
              Technology
            </button>
          </div>

          <div className='flex flex-wrap'>
            <div className='flex flex-col divide-y'>
              <div
                id='category-card'
                className='flex flex-col gap-2 py-10 max-w-3xl'
              >
                <div className='flex gap-2'>
                  <Image
                    className='w-12 h-12 rounded-full'
                    src='/g.jpg'
                    width={100}
                    height={100}
                    alt=''
                  />
                  <div className='font-medium'>
                    <p>
                      <span>Chintan Bhatt</span>・
                      <span className='text-black/60'>19 Jan 2023</span>
                    </p>
                    <p className='text-black/60'>Frontend Developer & Writer</p>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-2xl'>
                    Zer UI: the end of screen-based interfaces and what it means
                    for business
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi molestiae ipsum fugiat dolore, voluptates eaque.
                    Quibusdam maxime asperiores facilis exercitationem debitis
                    laborum error obcaecati qui, possimus neque, fugit
                    perferendis illo!
                  </p>
                </div>

                <span className='inline-flex text-sm font-medium items-center gap-2 mt-5'>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Tools
                  </span>
                </span>
              </div>

              <div
                id='category-card'
                className='flex flex-col gap-2 py-10 max-w-3xl'
              >
                <div className='flex gap-2'>
                  <Image
                    className='w-12 h-12 rounded-full'
                    src='/g.jpg'
                    width={100}
                    height={100}
                    alt=''
                  />
                  <div className='font-medium'>
                    <p>
                      <span>Chintan Bhatt</span>・
                      <span className='text-black/60'>19 Jan 2023</span>
                    </p>
                    <p className='text-black/60'>Frontend Developer & Writer</p>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-2xl'>
                    Zer UI: the end of screen-based interfaces and what it means
                    for business
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi molestiae ipsum fugiat dolore, voluptates eaque.
                    Quibusdam maxime asperiores facilis exercitationem debitis
                    laborum error obcaecati qui, possimus neque, fugit
                    perferendis illo!
                  </p>
                </div>

                <span className='inline-flex text-sm font-medium items-center gap-2 mt-5'>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Tools
                  </span>
                </span>
              </div>

              <div
                id='category-card'
                className='flex flex-col gap-2 py-10 max-w-3xl'
              >
                <div className='flex gap-2'>
                  <Image
                    className='w-12 h-12 rounded-full'
                    src='/g.jpg'
                    width={100}
                    height={100}
                    alt=''
                  />
                  <div className='font-medium'>
                    <p>
                      <span>Chintan Bhatt</span>・
                      <span className='text-black/60'>19 Jan 2023</span>
                    </p>
                    <p className='text-black/60'>Frontend Developer & Writer</p>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-2xl'>
                    Zer UI: the end of screen-based interfaces and what it means
                    for business
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi molestiae ipsum fugiat dolore, voluptates eaque.
                    Quibusdam maxime asperiores facilis exercitationem debitis
                    laborum error obcaecati qui, possimus neque, fugit
                    perferendis illo!
                  </p>
                </div>

                <span className='inline-flex text-sm font-medium items-center gap-2 mt-5'>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Tools
                  </span>
                </span>
              </div>

              <div
                id='category-card'
                className='flex flex-col gap-2 py-10 max-w-3xl'
              >
                <div className='flex gap-2'>
                  <Image
                    className='w-12 h-12 rounded-full'
                    src='/g.jpg'
                    width={100}
                    height={100}
                    alt=''
                  />
                  <div className='font-medium'>
                    <p>
                      <span>Chintan Bhatt</span>・
                      <span className='text-black/60'>19 Jan 2023</span>
                    </p>
                    <p className='text-black/60'>Frontend Developer & Writer</p>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-2xl'>
                    Zer UI: the end of screen-based interfaces and what it means
                    for business
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi molestiae ipsum fugiat dolore, voluptates eaque.
                    Quibusdam maxime asperiores facilis exercitationem debitis
                    laborum error obcaecati qui, possimus neque, fugit
                    perferendis illo!
                  </p>
                </div>

                <span className='inline-flex text-sm font-medium items-center gap-2 mt-5'>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10 w-fit'>
                    Tools
                  </span>
                </span>
              </div>
            </div>

            <div className='py-5 rounded-md h-full w-full flex-1 sticky top-0 bg-black text-white px-6 mx-16 flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-lg'>Category</p>
                <ul className='flex flex-wrap gap-2'>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    React.js
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    Next.js
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    ES6 JavaScript
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    TailwindCSS
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    HTML 5
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    Yew.rs
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    Rust
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    Node.js
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    MongoDB
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    Sanity.io
                  </li>
                  <li className='px-6 py-2 border border-white/30 w-fit'>
                    {' '}
                    CMS
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-bold text-lg'>Recommended Post</p>
                <ul className='flex flex-col gap-2 divide-y'>
                  <li className='flex flex-col gap-1'>
                    <span className='font-medium text-lg'>
                      Zer UI: the end of screen-based interfaces and what it
                      means for business
                    </span>

                    <span className='text-sm'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi molestiae ipsum fugiat dolore, voluptates eaque.
                      Quibusdam maxime asperiores facilis exercitationem debitis
                      laborum error obcaecati qui, possimus neque, fugit
                      perferendis illo!
                    </span>

                    <span className='px-2 py-1 border border-white/30 w-fit'>
                      Read
                    </span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-medium text-lg'>
                      Zer UI: the end of screen-based interfaces and what it
                      means for business
                    </span>

                    <span className='text-sm'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi molestiae ipsum fugiat dolore, voluptates eaque.
                      Quibusdam maxime asperiores facilis exercitationem debitis
                      laborum error obcaecati qui, possimus neque, fugit
                      perferendis illo!
                    </span>

                    <span className='px-2 py-1 border border-white/30 w-fit'>
                      Read
                    </span>
                  </li>
                  <li className='flex flex-col gap-1'>
                    <span className='font-medium text-lg'>
                      Zer UI: the end of screen-based interfaces and what it
                      means for business
                    </span>

                    <span className='text-sm'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi molestiae ipsum fugiat dolore, voluptates eaque.
                      Quibusdam maxime asperiores facilis exercitationem debitis
                      laborum error obcaecati qui, possimus neque, fugit
                      perferendis illo!
                    </span>

                    <span className='px-2 py-1 border border-white/30 w-fit'>
                      Read
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-bold text-lg'>Newsletter</p>

                <form className='flex flex-col gap-2'>
                  <p>
                    Get the latest developer post right in your inbox. We hand
                    pick the hottest stories to provide you with the content you
                    care about the most every single day.
                  </p>
                  <input
                    title='newsletter'
                    className='w-full bg-transparent border border-white/30 px-4 py-2 outline-none'
                    type='text'
                  />
                  <button className='border border-white/30 px-4 py-2'>
                    Join now
                  </button>
                </form>
              </div>

              <div>
                <p className='font-bold text-lg'>Follow us on our Socials</p>

                <ul className='flex gap-2 text-4xl'>
                  <li>
                    <a
                      rel='noopener'
                      title='Facebook'
                      target={`_blank`}
                      href='#'
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noopener'
                      title='Instagram'
                      target={`_blank`}
                      href='#'
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noopener'
                      title='Twitter'
                      target={`_blank`}
                      href='#'
                    >
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      rel='noopener'
                      title='YouTube'
                      target={`_blank`}
                      href='#'
                    >
                      <FaYoutubeSquare />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-3xl font-bold'>Recent Uploads</p>
          <ul className='w-full grid lg:grid-cols-3 gap-x-5 gap-y-5'>
            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold text-xl capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 items-center text-sm font-medium'>
                  <span className='px-6 py-2 border border-black/10'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10'>
                    Tools
                  </span>
                  <span className='px-6 py-2 border border-black/10'>Saas</span>
                  <span className='px-6 py-2 border border-black/10'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>

            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 items-center text-sm font-medium'>
                  <span className='px-6 py-2 border border-black/10'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10'>
                    Tools
                  </span>
                  <span className='px-6 py-2 border border-black/10'>Saas</span>
                  <span className='px-6 py-2 border border-black/10'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>

            <li className='flex flex-col gap-8 cursor-pointer'>
              <div className=''>
                <Image src='/g.jpg' width={1000} height={1000} alt='' />
              </div>

              <div className='text-xl flex flex-col gap-3'>
                <p className='text-sm font-medium'>
                  Phoenix barker・19 Jan 2023
                </p>

                <div className='mb-2'>
                  <p className='font-bold capitalize'>
                    How collaboration makes us better designers
                  </p>
                  <p className='text-lg'>
                    Linear helps streamline software projects, sprints. task,
                    and bug tracking. Here&apos;s how to get started.
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 items-center text-sm font-medium'>
                  <span className='px-6 py-2 border border-black/10'>
                    Product
                  </span>
                  <span className='px-6 py-2 border border-black/10'>
                    Tools
                  </span>
                  <span className='px-6 py-2 border border-black/10'>Saas</span>
                  <span className='px-6 py-2 border border-black/10'>
                    Frameworks
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <p className='w-full flex justify-center items-center gap-10 mt-8'>
            <span>Previous</span>
            <span className='flex gap-4 justify-center'>
              <span className='bg-black text-white px-3 py-1 rounded-md'>
                1
              </span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>
                2
              </span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>
                3
              </span>
              <span className='bg-black text-white px-3 py-1 rounded-md'>
                4
              </span>
            </span>
            <span>Next</span>
          </p>
        </div>

        <div></div>
      </main>
    </React.Fragment>
  );
}

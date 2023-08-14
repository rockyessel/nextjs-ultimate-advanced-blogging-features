'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { BiSolidCommentDetail } from 'react-icons/bi';
import {BsFillCollectionFill, BsFillSuitHeartFill} from 'react-icons/bs';
import Avatar from 'react-avatar';
interface Props {}

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const userDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        showNotifications &&
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        showUserDropdown &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showNotifications, showUserDropdown]);

  return (
    <header>
      <nav className='bg-black text-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button
              title='fdfdf'
              type='button'
              className='hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100'
            >
              Menu
            </button>

            <a href='https://flowbite.com' className='flex mr-4'>
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
            </a>
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
            <button
              type='button'
              className='hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2'
            >
              <IoMdAdd className='text-white' />
              Create Post
            </button>

            {/* <!-- Notifications --> */}
            <button
              onClick={toggleNotifications}
              type='button'
              className='p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100  focus:ring-4 focus:ring-gray-300 '
            >
              <span className='sr-only'>View notifications</span>
              {/* <!-- Bell icon --> */}
              <FaBell />
            </button>
            {/* <!-- Dropdown menu --> */}
            {showNotifications && (
              <div
                ref={notificationsRef}
                className='absolute top-12 right-0 mt-3 mr-2 w-[20rem] z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow'
              >
                
                  <div className='block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 '>
                    Notifications
                  </div>
                  <div>
                    <a
                      href='#'
                      className='flex py-3 px-4 border-b hover:bg-gray-100'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 rounded-full'
                          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                          alt='Bonnie Green avatar'
                        />
                        <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700'>
                          <BiSolidCommentDetail />
                        </div>
                      </div>
                      <div className='pl-3 w-full'>
                        <div className='text-gray-500 font-normal text-sm mb-1.5 '>
                          New message from{' '}
                          <span className='font-semibold dark:text-white'>
                            Bonnie Green
                          </span>
                          Hey, whats up? All set for the presentation?
                        </div>
                        <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>
                          a few moments ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex py-3 px-4 border-b dark:border-gray-600'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 rounded-full'
                          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                          alt='Jese Leos avatar'
                        />
                        <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700'>
                          <BiSolidCommentDetail />
                        </div>
                      </div>
                      <div className='pl-3 w-full'>
                        <div className='text-gray-500 font-normal text-sm mb-1.5 '>
                          <span className='font-semibold dark:text-white'>
                            Jese leos
                          </span>{' '}
                          and{' '}
                          <span className='font-medium dark:text-white'>
                            5 others
                          </span>{' '}
                          started following you.
                        </div>
                        <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>
                          10 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex py-3 px-4 border-b dark:border-gray-600'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 rounded-full'
                          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
                          alt='Joseph McFall avatar'
                        />
                        <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700'>
                          <BiSolidCommentDetail />
                        </div>
                      </div>
                      <div className='pl-3 w-full'>
                        <div className='text-gray-500 font-normal text-sm mb-1.5 '>
                          <span className='font-semibold dark:text-white'>
                            Joseph Mcfall
                          </span>{' '}
                          and{' '}
                          <span className='font-medium dark:text-white'>
                            141 others
                          </span>{' '}
                          love your story. See it and view more stories.
                        </div>
                        <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>
                          44 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='flex py-3 px-4 border-b dark:border-gray-600'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 rounded-full'
                          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
                          alt='Roberta Casas image'
                        />
                        <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700'>
                          <BiSolidCommentDetail />
                        </div>
                      </div>
                      <div className='pl-3 w-full'>
                        <div className='text-gray-500 font-normal text-sm mb-1.5 '>
                          <span className='font-semibold dark:text-white'>
                            Leslie Livingston
                          </span>{' '}
                          mentioned you in a comment:{' '}
                          <span className='font-medium text-primary-700 dark:text-primary-500'>
                            @bonnie.green
                          </span>{' '}
                          what do you say?
                        </div>
                        <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>
                          1 hour ago
                        </div>
                      </div>
                    </a>
                    <a href='#' className='flex py-3 px-4'>
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 rounded-full'
                          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png'
                          alt='Robert image'
                        />
                        <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700'>
                          <BiSolidCommentDetail />
                        </div>
                      </div>
                      <div className='pl-3 w-full'>
                        <div className='text-gray-500 font-normal text-sm mb-1.5 '>
                          <span className='font-semibold dark:text-white'>
                            Robert Brown
                          </span>{' '}
                          posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>
                          3 hours ago
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href='#'
                    className='block py-2 text-base font-normal text-center bg-gray-50 hover:bg-gray-100 dark:text-white dark:hover:underline'
                  >
                    <div className='inline-flex items-center '>
                      <svg
                        className='mr-2 w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                        <path
                          fillRule='evenodd'
                          d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      View all
                    </div>
                  </a>
                </div>
            )}

            <button
              onClick={toggleUserDropdown}
              type='button'
              className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 '
            >
              <span className='sr-only'>Open user menu</span>
              <Avatar
                name='Rocky Essel'
                size='40'
                className='w-full h-full object-cover object-center'
                round={true}
              />
            </button>
            {showUserDropdown && (
              <div
                ref={userDropdownRef}
                className='absolute top-12 right-0 mt-3 mr-2 w-56 z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow'
              >
                <div className='py-3 px-4 text-gray-500'>
                  <span className='block text-sm font-semibold'>Neil sims</span>
                  <span className='block text-sm font-light truncate '>
                    name@flowbite.com
                  </span>
                </div>
                <ul className='py-1 font-light text-gray-500 '>
                  <li>
                    <a href='#' className='block py-2 px-4 text-sm '>
                      My profile
                    </a>
                  </li>
                </ul>
                <ul className='py-1 font-light text-gray-500 '>
                  <li>
                    <a href='#' className='flex items-center py-2 px-4 text-sm'>
                      <BsFillSuitHeartFill />
                      Stories
                    </a>
                  </li>
                  <li>
                    <a href='#' className='flex items-center py-2 px-4 text-sm'>
                      <BsFillCollectionFill />
                      Posts
                    </a>
                  </li>
                </ul>
                <ul className='py-1 font-light text-gray-500 '>
                  <li>
                    <a href='#' className='block py-2 px-4 text-sm'>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

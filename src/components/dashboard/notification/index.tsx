'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';
import { BiSolidCommentDetail } from 'react-icons/bi';
import Avatar from 'react-avatar';
import { AiFillEye } from 'react-icons/ai';
import Link from 'next/link';

const NotificationCard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showNotifications]);

  const commentNotification = [
    {
      name: 'Bonnie Green',
      image:
        'https://plus.unsplash.com/premium_photo-1675034393500-dc5fe64b527a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      comment: 'Bud, thanks for the information, it really helped',
    },
  ];

  return (
    <div>
      <button
        onClick={toggleNotifications}
        type='button'
        className='p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100  focus:ring-4 focus:ring-gray-300 '
      >
        <span className='sr-only'>View notifications</span>
        <FaBell />
      </button>
      {showNotifications && (
        <div
          ref={notificationsRef}
          className='absolute top-13 right-0 mt-3 mr-2 w-[20rem] z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow'
        >
          <div className='block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 '>
            Notifications
          </div>
          <div>
            {commentNotification.map((comment, index) => (
              <Link
                key={index}
                href='/blog/slug#comments'
                className='flex py-3 px-4 border-b hover:bg-gray-100 text-black'
              >
                <div className='flex-shrink-0'>
                  <Avatar
                    name={comment.name}
                    src={comment.image}
                    size='40'
                    className='w-full h-full object-cover object-center'
                    round={true}
                  />

                  <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-black p-1'>
                    <BiSolidCommentDetail />
                  </div>
                </div>
                <div className='pl-3 w-full'>
                  <p className='text-gray-500 font-normal text-sm mb-1.5 '>
                    {comment.comment}
                  </p>
                  <div className='text-xs font-medium'>a few moments ago</div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href='/dashboard/notification'
            className='block py-2 text-base font-normal text-center  text-black bg-gray-50 hover:bg-gray-100'
          >
            <div className='inline-flex items-center '>
              <AiFillEye />
              View all
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;

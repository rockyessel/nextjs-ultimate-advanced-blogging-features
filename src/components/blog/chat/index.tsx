'use client';

import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdKeyboardVoice, MdHideSource } from 'react-icons/md';
import { RiSendPlane2Line, RiSendPlane2Fill } from 'react-icons/ri';
import Message from './message';

const Chat = () => {
  const chatContainerRef = React.useRef<HTMLDivElement | null>(null);
  const chatInputElement = React.useRef<HTMLInputElement>(null);

  const chatData = [
    {
      userId: '1',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 1',
    },
    {
      userId: '2',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 2',
    },
    {
      userId: '3',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 3',
    },
    {
      userId: '4',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 4',
    },
    {
      userId: '5',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 5',
    },
    {
      userId: '6',
      picture: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      message: 'Hello 6',
    },
  ];

  console.log('chatInputElement', chatInputElement);

  const handleSendMessage = () => {
    const message = chatInputElement.current?.value;
    console.log('message', message);
  };

  return (
    <div className='sticky top-10 w-full mt-10'>
      <div className='flex items-center justify-between p-2 mt-2'>
        <MdHideSource />
        <p>LIVE CHAT</p>
        <FiMoreHorizontal />
      </div>

      <div
        className='bg-black h-[30rem] w-[25rem] overflow-y-auto px-2'
        ref={chatContainerRef}
      >
        {chatData.map((chat, index) => (
          <Message key={index} {...chat} />
        ))}
      </div>

      <div className=''>
        <div className='relative flex'>
          <span className='absolute inset-y-0 flex items-center'>
            <button
              title='Voice Recorder'
              type='button'
              className='text-default-color inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'
            >
              <MdKeyboardVoice />
            </button>
          </span>
          <input
            type='text'
            placeholder='Write your message!'
            ref={chatInputElement}
            className='w-full h-auto text-default-color  pl-12 bg-gray-200 rounded-md py-3 bg-dark-color'
          />
          <div className='absolute right-0 items-center inset-y-0 hidden sm:flex'>
            <button
              onClick={handleSendMessage}
              title='dsdsd'
              type='button'
              className='text-default-color bg-dark-color inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out hover:bg-blue-400 focus:outline-none'
            >
              <span className='font-bold'>Send</span>
              <span className='icon-hover'>
                <RiSendPlane2Line />
                {/* <RiSendPlane2Fill /> */}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

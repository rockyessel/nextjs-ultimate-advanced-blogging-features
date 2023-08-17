import React from 'react';
import { useSession } from 'next-auth/react';
import { UserProps } from '@/interface';
import Image from 'next/image';
import { Chat } from '@/interface';

interface Props {
  chat: Chat;
}

const Message = (props: Props) => {
  const { data: session } = useSession();
  const user = { ...session?.user } as UserProps;
  return (
    <div className='my-2'>
      <div
        className={`flex items-end ${
          props?.chat?.author?.id === user?.id ? 'justify-end' : ''
        }`}
      >
        <div
          className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
            props?.chat?.author?.id === user?.id
              ? 'order-1 items-end'
              : 'order-2 items-start'
          }`}
        >
          <div>
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                props?.chat?.author?.id === user?.id
                  ? 'rounded-br-none'
                  : 'rounded-bl-none'
              }  bg-white/50 text-white`}
            >
              {props?.chat?.content}
            </span>
          </div>
        </div>
        <Image
          src={props?.chat?.author?.picture}
          alt={props?.chat?.author?.id}
          height={100}
          width={100}
          className={`w-6 h-6 rounded-full ${
            props?.chat?.author?.id === user?.id ? 'order-2' : 'order-1'
          } `}
        />
      </div>
    </div>
  );
};

export default Message;

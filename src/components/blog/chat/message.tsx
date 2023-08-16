import React from 'react';
import { useSession } from 'next-auth/react';
import { UserProps } from '@/interface';
import Image from 'next/image';
interface Props {
  userId: string;
  picture: string;
  message: string;
}

const Message = (props: Props) => {
  const { data: session } = useSession();
  const user = { ...session?.user } as UserProps;
  return (
    <div className='my-2'>
      <div
        className={`flex items-end ${
          props?.userId === user?.id ? 'justify-end' : ''
        }`}
      >
        <div
          className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
            props?.userId === user?.id
              ? 'order-1 items-end'
              : 'order-2 items-start'
          }`}
        >
          <div>
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                props?.userId === user?.id
                  ? 'rounded-br-none'
                  : 'rounded-bl-none'
              }  bg-white/50 text-white`}
            >
              {props?.message}
            </span>
          </div>
        </div>
        <Image
          src={props?.picture}
          alt={props?.userId}
          height={100}
          width={100}
          className={`w-6 h-6 rounded-full ${
            props.userId === user?.id ? 'order-2' : 'order-1'
          } `}
        />
      </div>
    </div>
  );
};

export default Message;

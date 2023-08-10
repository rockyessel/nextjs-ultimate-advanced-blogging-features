'use client';

import Image from 'next/image';
import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';

interface Props {}

const initialFormValue = {
  email: '',
  password: '',
};

const Authenticate = () => {
  const [form, setForm] =
    React.useState<typeof initialFormValue>(initialFormValue);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setForm((initialValue) => ({
      ...initialValue,
      [target.name]: target.value,
    }));
  };

  const handleSubmission = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log('form: ', form);
    if (form) {
      signIn('credentials', {
        ...form,
        redirect: false,
      });
    }
  };

  return (
    <main className='fixed top-0 w-full h-screen overflow-y-hidden flex items-center justify-center bg-gray-800'>
      <section className='flex flex-col'>
        <div className='flex items-center justify-center h-screen'>
          {/* <!-- Login Container --> */}
          <div className='min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] '>
            <div className='mb-8 flex flex-col items-center justify-center'>
              <Image src='/bloggkie.svg' width={50} height={50} alt='Logo' />
              <p className='font-rathetta'>BloggKie</p>
            </div>
            <form onSubmit={handleSubmission}>
              <fieldset className='flex flex-col text-sm rounded-md'>
                <input
                  className='mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 '
                  type='text'
                  placeholder='Username or Email id'
                  value={form.email}
                  onChange={handleFormChange}
                  name='email'
                />
                <input
                  className='border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500'
                  type='password'
                  placeholder='Password'
                  value={form.password}
                  onChange={handleFormChange}
                  name='password'
                />
              </fieldset>
              <button
                className='mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300'
                type='submit'
              >
                Sign in
              </button>
            </form>
            <div className='mt-5 flex justify-between text-sm text-gray-600'>
              <a href='#'>Forgot password?</a>
              <a href='#'>Sign up</a>
            </div>
            <div className='flex justify-center mt-5 text-sm'>
              <div className='inline-flex items-center justify-center w-full'>
                <hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
                <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
                  or
                </span>
              </div>
            </div>
            <div className='mt-2.5 flex justify-center gap-3    '>
              <FaGithub className='w-10 h-10 p-1 rounded-md bg-gray-500 text-white text-2xl' />
              <FaGoogle className='w-10 h-10 p-1 rounded-md bg-gray-500 text-white text-2xl' />
              <FaTwitter className='w-10 h-10 p-1 rounded-md bg-gray-500 text-white text-2xl' />
              <FaFacebook className='w-10 h-10 p-1 rounded-md bg-gray-500 text-white text-2xl' />
            </div>
            <div className='mt-5 flex text-center text-sm text-gray-400'>
              <p>
                This site is protected by reCAPTCHA and the Google <br />
                <a className='underline' href=''>
                  Privacy Policy
                </a>
                and
                <a className='underline' href=''>
                  Terms of Service
                </a>
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Authenticate;

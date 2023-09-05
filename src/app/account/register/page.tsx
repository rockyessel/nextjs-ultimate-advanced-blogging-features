import Link from 'next/link';
import React from 'react';
import RegisterForm from '@/components/main/form/register';

interface Props {}

const RegistrationPage = () => {
  const handleSubmit = (formData: Record<string, string | boolean>) => {
    // Handle form submission with valid data
    console.log('Form submitted with data:', formData);
  };
  return (
    <main className='w-screen h-screen flex justify-center bg-gray-300 items-center'>
      <section className='w-full h-full flex justify-center items-center'>
        <div className='lg:w-[50rem] w-full flex flex-col gap-5 px-4 lg:px-20 mx-auto'>
          <div className='text-center mb-5'>
            <p className='text-xl lg:text-5xl font-bold lg:mb-5'>
              Create an account with us
            </p>
            <p className='text-sm lg:text-xl font-medium'>
              The faster you fill up, the faster you get into your dashboard
            </p>
          </div>
          <RegisterForm />
          <div className='mt-10 text-center'>
            <p>
              Have an account? Then{' '}
              <Link className='font-bold underline' href='/accounts/login'>
                Login
              </Link>{' '}
              to continue
            </p>
            RegisterForm
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationPage;

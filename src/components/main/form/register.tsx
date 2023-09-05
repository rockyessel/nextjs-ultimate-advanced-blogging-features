'use client';
import React from 'react';
import { BiLogoGoogle,BiLogoLinkedinSquare,BiLogoGithub,BiLogoTwitter } from 'react-icons/bi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FormValidation } from '@/lib/helpers';
import { FormErrorProps } from '@/interface';
import Link from 'next/link';
import {signIn} from 'next-auth/react'

const RegisterForm = () => {
  const [showState, setShowState] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    username: '',
    remember_me: false,
  });
  const [emailErr, setEmailErr] = React.useState<FormErrorProps>({
    state: false,
    msg: '',
  });
  const [passwordErr, setPasswordErr] = React.useState<FormErrorProps>({
    state: false,
    msg: '',
  });
  const handleShowPassword = () => {
    setShowState((previousState) => !previousState);
  };

  const handleAccountFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;

    if (target.type === 'checkbox') {
      setFormData((previousValues) => ({
        ...previousValues,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((previousValues) => ({
        ...previousValues,
        [target.name]: target.value,
      }));
    }
  };

  const handleValidation = (): { email: boolean; password: boolean } => {
    const email: boolean = FormValidation(
      'email',
      formData.email,
      emailErr,
      setEmailErr
    );
    const password: boolean = FormValidation(
      'password',
      formData.password,
      passwordErr,
      setPasswordErr
    );
    return { email, password };
  };

  const handleSubmission = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const validateObject = handleValidation();
      const { email, password } = validateObject;
      if (!email || !password) return;
      const data = { email: formData.email, password: formData.password };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmission}
      className='flex flex-col gap-5 font-medium '
    >
      <fieldset className='flex flex-col gap-2'>
        <label>Email</label>
        <input
          title='email'
          className='input rounded-none'
          placeholder='Enter your email'
          name='email'
          value={formData?.email}
          onChange={handleAccountFormData}
          type='text'
        />
        {emailErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{emailErr.msg}</p>
        )}
      </fieldset>
      <fieldset className='flex flex-col gap-2'>
        <label>Username</label>
        <input
          title='username'
          className='input rounded-none'
          placeholder='Enter your username'
          name='username'
          value={formData?.username}
          onChange={handleAccountFormData}
          type='text'
        />
        {emailErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{emailErr.msg}</p>
        )}
      </fieldset>

      <fieldset className='flex flex-col gap-2'>
        <label>Password</label>
        <fieldset className='input rounded-none flex items-center justify-between'>
          <input
            title='password'
            className='outline-none w-full'
            placeholder='Enter your password'
            name='password'
            value={formData?.password}
            onChange={handleAccountFormData}
            type={`${showState ? 'text' : 'password'}`}
          />
          {showState ? (
            <AiFillEyeInvisible
              onClick={handleShowPassword}
              className='text-4xl p-1 hover:bg-black hover:text-white rounded-sm'
            />
          ) : (
            <AiFillEye
              onClick={handleShowPassword}
              className='text-4xl p-1 hover:bg-black hover:text-white rounded-sm'
            />
          )}
        </fieldset>
        {passwordErr.state && (
          <p className={`text-sm text-red-600 font-light`}>{passwordErr.msg}</p>
        )}
      </fieldset>

      <fieldset className='flex justify-between'>
        <fieldset className='flex items-center gap-1'>
          <input
            title='checkbox'
            className='checkbox'
            name='remember_me'
            type='checkbox'
            onChange={handleAccountFormData}
          />
          <label>Read Terms and Conditions</label>
        </fieldset>

        <Link href='/accounts/forgot-password'>Forgot Password?</Link>
      </fieldset>

      <fieldset className='flex flex-col gap-4 font-medium'>
        <button type='submit' className='bg-black text-white w-full px-4 py-2'>
          Register
        </button>
        <button
        onClick={()=> signIn('google')}
        type='button'
        className='w-full inline-flex items-center gap-1 justify-center border-2 border-gray-500/30 px-4 py-2'
        >
          <BiLogoGoogle className='text-xl' />
          <span>Register with Google</span>
          </button>
          <button
          onClick={()=> signIn('linkedin')}
          type='button'
          className='w-full inline-flex items-center gap-1 justify-center border-2 border-gray-500/30 px-4 py-2'
        >
          <BiLogoLinkedinSquare className='text-xl' />
          <span>Register with Linkedin</span>
        </button>
        <button
        onClick={()=> signIn('twitter')}
        type='button'
          className='w-full inline-flex items-center gap-1 justify-center border-2 border-gray-500/30 px-4 py-2'
          >
          <BiLogoTwitter className='text-xl' />
          <span>Register with Twitter</span>
        </button>
        <button
        onClick={()=> signIn('github')}
          type='button'
          className='w-full inline-flex items-center gap-1 justify-center border-2 border-gray-500/30 px-4 py-2'
        >
          <BiLogoGithub className='text-xl' />
          <span>Register with Github</span>
        </button>
      </fieldset>
    </form>
  );
};

export default RegisterForm;

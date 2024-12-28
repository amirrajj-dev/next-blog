'use client';
import { useRouter, redirect } from 'next/navigation';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import SubmitBtn from './SubmitBtn';
import Swal from 'sweetalert2';
import Link from 'next/link';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async () => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res.error && res.error === 'No user found with that email') {
      Swal.fire({
        icon : 'error',
        title: 'خطا',
        text: 'کاربری با این ایمیل وجود ندارد.',
        confirmButtonText: 'باشه',
        confirmButtonColor: '#d33',
        showCancelButton: false,
      })
      // Handle error (e.g., show an error message to the user)
    } else {
      router.push('/'); // Redirect to home page after successful sign-in
    }
  };
  
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 dark:bg-darkBg font-dana-light'>
      <div className='w-full max-w-md rounded-lg bg-white dark:bg-darkCard p-8 shadow-md'>
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-900 dark:text-darkText'>
          ورود به نکست بلاگ
        </h2>
        <form onSubmit={e=>e.preventDefault()}>
          <div className='mb-4'>
            <label
              className='mb-2 block font-bold text-gray-700 dark:text-darkText'
              htmlFor='email'
            >
              ایمیل
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText'
              placeholder='ایمیل خود را وارد کنید'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='mb-2 block font-bold text-gray-700 dark:text-darkText'
              htmlFor='password'
            >
              رمز عبور
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded-lg border p-3 text-black/80 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText'
              placeholder='رمز عبور خود را وارد کنید'
              required
            />
          </div>
        <SubmitBtn onSubmit={handleSubmit}/>
        <Link href={'/auth/signup'} className='text-blue-600 dark:text-blue-400 inline-block mt-2 text-sm font-dana-regular'>آیا حساب کاربری ندارید؟ ثبت نام کنید</Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;